import { SelectColumnType } from "../../types/select-object";
import Loading from "../loading";
import TableComponent from "../table";
import TitlePage from "../title-page";
import { ButtonAdd, ContainerListStyled } from "./styled";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ListScreenComponentProps {
    columns: SelectColumnType[];
    data: any[];
    isEdit: boolean;
    editRoute: string;
    isDelete: boolean;
    handleDelete: (id: string) => void;
    title: string;
    isCreate: boolean;
    createRoute: string;
    isFetching: boolean;
}

export default function ListScreenComponent({
    columns,
    data,
    isEdit,
    editRoute,
    isDelete,
    handleDelete,
    title,
    isCreate,
    createRoute,
    isFetching,
}: ListScreenComponentProps) {
    const navigate = useNavigate();

    return (
        <ContainerListStyled>
            <TitlePage>{title}</TitlePage>
            {isCreate && (
                <ButtonAdd onClick={() => navigate(createRoute)}>
                    <FaPlus /> Criar
                </ButtonAdd>
            )}

            <TableComponent
                columns={columns}
                data={data}
                isEdit={isEdit}
                editRoute={editRoute}
                isDelete={isDelete}
                handleDelete={handleDelete}
            />
            <Loading isFetching={isFetching} isArea={true} />
        </ContainerListStyled>
    );
}
