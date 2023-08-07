import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";
import TitlePage from "../../../title-page";
import { FaPlus } from "react-icons/fa";
import Table from "../../../table/index";

export const ContainerListStyled = styled.div<StyledComponentProps>`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ButtonAdd = styled.button<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem;
    gap: .5rem;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
    width: fit-content;
    

    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColorBtn};
    font-size: .8rem;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
    }

    svg {
        font-size: .9rem;
        color: ${props => props.theme.primaryTextColorBtn};
    }
`

export default function ConfigurationTokenListPage() {
    return (
        <ContainerListStyled>
            <TitlePage>Configurações</TitlePage>
            <ButtonAdd><FaPlus /> Criar</ButtonAdd>
            <Table 
                columns={[
                    {
                        label: "Id",
                        value: "id"
                    },
                    {
                        label: "Nome",
                        value: "nome"
                    },
                    {
                        label: "Idade",
                        value: "idade"
                    }
                ]}
                data={[
                    {
                        id: "2",
                        nome: "André Luiz Barros",
                        idade: 18
                    },
                    {
                        id: "4",
                        nome: "Fernando",
                        idade: 19
                    }
                ]}
            />
        </ContainerListStyled>
    );
}
