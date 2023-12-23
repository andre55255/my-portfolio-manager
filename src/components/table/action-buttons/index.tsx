import { ActionButtonsStyled } from "../styled";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ActionButtonsProps = {
    isDelete: boolean;
    handleDelete: (id: string) => void;
    isEdit: boolean;
    editRoute: string;
    idItem: string;
};

export default function ActionButtonsComponent({
    isDelete,
    handleDelete,
    isEdit,
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
            {isEdit && (
                <FaEdit
                    className="edit"
                    onClick={() => navigate(editRoute.replace(":id", idItem))}
                />
            )}
            {isDelete && (
                <FaTrash className="delete" onClick={handleClickConfirm} />
            )}
        </ActionButtonsStyled>
    );
}
