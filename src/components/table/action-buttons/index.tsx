import { ActionButtonsStyled } from "../styled";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ActionButtonsProps = {
    handleDelete: (id: string) => void;
    editRoute: string;
    idItem: string;
};

export default function ActionButtonsComponent({
    handleDelete,
    editRoute,
    idItem,
}: ActionButtonsProps) {
    const navigate = useNavigate();

    const handleClickConfirm = () => {
        const isConfirm = window.confirm(`Deseja excluir o item ${idItem}?`);
        if (isConfirm) {
            handleDelete(idItem);
        }
    };

    return (
        <ActionButtonsStyled>
            <FaEdit
                className="edit"
                onClick={() => navigate(editRoute.replace(":id", idItem))}
            />
            <FaTrash className="delete" onClick={handleClickConfirm} />
        </ActionButtonsStyled>
    );
}
