import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListScreenComponent from "../../../list-screen";
import { SelectColumnType } from "../../../../types/select-object";
import { AuthContext } from "../../../../providers/auth-provider";
import { verifyResponseRequest } from "../../../../helpers/function-utils";
import { FormContactListDataApi } from "../../../../types/service-contacts-me-data";
import { handleContactList } from "../../../../services/contacts-me/contact-list-service";
import { handleContactDelete } from "../../../../services/contacts-me/contact-delete-service";

export default function ContactListPageComponent() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [data, setData] = useState<FormContactListDataApi[]>(
        []
    );

    const handleListData = useCallback(async () => {
        setIsFetching(true);

        const resultReq = await handleContactList();
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

        const resultReq = await handleContactDelete(id);
        const isSuccess = verifyResponseRequest(resultReq, logout!!, navigate);
        if (!isSuccess) {
            setIsFetching(false);
            return;
        }
        await handleListData();
    };

    const columns: SelectColumnType[] = [
        {
            label: "Id",
            value: "id",
            isVisible: true,
        },
        {
            label: "Nome",
            value: "name",
            isVisible: true,
        },
        {
            label: "Mensagem",
            value: "message",
            isVisible: true,
        },
        {
            label: "Contato",
            value: "contact",
            isVisible: true,
        },
    ];

    useEffect(() => {
        handleListData();
    }, []);

    return (
        <ListScreenComponent
            title="Contatos"
            createRoute=""
            isCreate={false}
            editRoute=""
            isEdit={false}
            handleDelete={handleDelete}
            isDelete={false}
            isFetching={isFetching}
            columns={columns}
            data={data}
        />
    );
}
