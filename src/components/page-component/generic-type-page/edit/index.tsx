import CreateScreenComponent from "../../../create-screen";
import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../providers/auth-provider";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../../helpers/function-utils";
import { showToastSuccess } from "../../../../helpers/toast-utils";
import { routesPages } from "../../../../helpers/routes-pages";
import { SaveGenericType } from "../../../../types/service-generic-type-data";
import { handleGenericPrepare } from "../../../../services/generic-type/generic-prepare-service";
import ScreenFormGeneric from "../../../screen-forms/generic-type";
import { handleGenericEdit } from "../../../../services/generic-type/generic-edit-service";

export default function GenericTypeEditPageComponent() {
    const [isFetchingPage, setIsFetchingPage] = useState<boolean>(false);
    const [isFetchingSubmit, setIsFetchingSubmit] = useState<boolean>(false);
    const [dataSave, setDataSave] = useState<SaveGenericType>();

    const navigate = useNavigate();
    const { id } = useParams();
    const { accessToken, logout } = useContext(AuthContext);

    const handleSubmit = async (values: SaveGenericType) => {
        setIsFetchingSubmit(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleGenericEdit(
            accessToken!!,
            values,
            id || "0"
        );
        const isVerifiedReq = verifyResponseRequest(
            resultReq,
            logout!!,
            navigate
        );
        if (!isVerifiedReq) {
            setIsFetchingSubmit(false);
            return;
        }
        showToastSuccess({ message: resultReq.message });
        navigate(routesPages.genericTypes.list);
    };

    const handlePrepare = useCallback(async () => {
        setIsFetchingPage(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleGenericPrepare(accessToken!!, id || "0");
        const isVerifiedReq = verifyResponseRequest(
            resultReq,
            logout!!,
            navigate
        );
        if (!isVerifiedReq) {
            setIsFetchingPage(false);
            return;
        }
        setDataSave(resultReq.object);
        setIsFetchingPage(false);
    }, []);

    useEffect(() => {
        handlePrepare();
    }, []);

    return (
        <CreateScreenComponent
            isFetchingPage={isFetchingPage}
            title="Editar Tipo Genérico"
        >
            <ScreenFormGeneric
                isFetching={isFetchingSubmit}
                handleSubmit={handleSubmit}
                values={dataSave}
            />
        </CreateScreenComponent>
    );
}
