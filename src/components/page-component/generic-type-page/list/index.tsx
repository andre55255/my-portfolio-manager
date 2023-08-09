import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListScreenComponent from "../../../list-screen";
import { routesPages } from "../../../../helpers/routes-pages";
import { SelectColumnType } from "../../../../types/select-object";
import { AuthContext } from "../../../../providers/auth-provider";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../../helpers/function-utils";
import { GenericType } from "../../../../types/service-generic-type-data";
import { handleGenericList } from "../../../../services/generic-type/generic-list-service";
import { handleGenericDelete } from "../../../../services/generic-type/generic-delete-service";

export default function GenericTypesListPage() {
    const navigate = useNavigate();
    const { accessToken, logout } = useContext(AuthContext);

    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [data, setData] = useState<GenericType[]>([]);

    const handleList = useCallback(async () => {
        setIsFetching(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleGenericList(accessToken!!);
        const isSuccess = verifyResponseRequest(resultReq, logout!!, navigate);
        if (!isSuccess) {
            setIsFetching(false);
            return;
        }
        setData(resultReq.object?.items || []);
        setIsFetching(false);
    }, []);

    const handleDelete = async (id: string) => {
        setIsFetching(true);

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const resultReq = await handleGenericDelete(accessToken!!, id);
        const isSuccess = verifyResponseRequest(resultReq, logout!!, navigate);
        if (!isSuccess) {
            setIsFetching(false);
            return;
        }
        await handleList();
    };

    const columns: SelectColumnType[] = [
        {
            label: "Id",
            value: "id",
            isVisible: true,
        },
        {
            label: "Token",
            value: "token",
            isVisible: true,
        },
        {
            label: "Valor",
            value: "value",
            isVisible: true,
        },
        {
            label: "Descrição",
            value: "description",
            isVisible: true,
        },
    ];

    useEffect(() => {
        handleList();
    }, []);

    return (
        <ListScreenComponent
            title="Tipos"
            createRoute={routesPages.genericTypes.create}
            editRoute={routesPages.genericTypes.edit}
            handleDelete={handleDelete}
            isFetching={isFetching}
            columns={columns}
            data={data}
        />
    );
}
