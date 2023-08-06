import { ContainerFooterPublic, FooterSignature } from "./styled";
import { FaHeart } from "react-icons/fa";

export default function FooterPublicLayout() {
    return (
        <ContainerFooterPublic>
            <FooterSignature>&copy; Desenvolvido com <FaHeart /> por André Luiz Barros</FooterSignature>
        </ContainerFooterPublic>
    );
}