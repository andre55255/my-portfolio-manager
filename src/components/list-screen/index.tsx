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
    editRoute: string;
    handleDelete: (id: string) => void;
    title: string;
    createRoute: string;
    isFetching: boolean;
}

export default function ListScreenComponent({
    columns,
    data,
    editRoute,
    handleDelete,
    title,
    createRoute,
    isFetching,
}: ListScreenComponentProps) {
    const navigate = useNavigate();

    return (
        <ContainerListStyled>
            <TitlePage>{title}</TitlePage>
            <ButtonAdd onClick={() => navigate(createRoute)}>
                <FaPlus /> Criar
            </ButtonAdd>
            <TableComponent
                columns={columns}
                data={data}
                editRoute={editRoute}
                handleDelete={handleDelete}
            />
            <Loading isFetching={isFetching} isArea={true} />
        </ContainerListStyled>
    );
}
