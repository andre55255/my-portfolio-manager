import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const ContainerSelectStyled = styled.div<StyledComponentProps>`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-right: 1rem;

    @media (max-width: 600px) {
        margin-top: 1rem;
        margin-left: 1rem;
    }
`;

export const LabelSelectStyled = styled.span<StyledComponentProps>`
    font-size: .9rem;
    color: ${props => props.theme.colorTextAsideMenu};
`;

export const SelectStyled = styled.select<StyledComponentProps>`

`
