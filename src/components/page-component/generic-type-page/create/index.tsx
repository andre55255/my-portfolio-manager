import CreateScreenComponent from "../../../create-screen";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/auth-provider";
import { verifyResponseRequest } from "../../../../helpers/function-utils";
import { showToastSuccess } from "../../../../helpers/toast-utils";
import { routesPages } from "../../../../helpers/routes-pages";
import { SaveGenericType } from "../../../../types/service-generic-type-data";
import { handleGenericCreate } from "../../../../services/generic-type/generic-create-service";
import ScreenFormGeneric from "../../../screen-forms/generic-type";

export default function GenericTypeCreatePageComponent() {
    const [isFetchingSubmit, setIsFetchingSubmit] = useState<boolean>(false);

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleSubmit = async (values: SaveGenericType) => {
        setIsFetchingSubmit(true);

        const resultReq = await handleGenericCreate(values);
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

    return (
        <CreateScreenComponent title="Criar Tipo Genérico">
            <ScreenFormGeneric
                isFetching={isFetchingSubmit}
                handleSubmit={handleSubmit}
            />
        </CreateScreenComponent>
    );
}
