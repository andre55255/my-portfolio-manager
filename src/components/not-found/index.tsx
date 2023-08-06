import { useNavigate } from "react-router-dom";
import { Button, Container, ErrorContent, Message, Title } from "./styles";
import { routesPages } from "../../helpers/routes-pages";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container>
            <ErrorContent>
                <Title>404</Title>
                <Message>Página não encontrada</Message>
                <Button onClick={() => navigate(routesPages.home)}>Voltar à Página Inicial</Button>
            </ErrorContent>
        </Container>
    );
}
