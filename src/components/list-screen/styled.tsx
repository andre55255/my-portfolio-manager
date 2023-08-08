import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

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