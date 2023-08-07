import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const HeaderWrapperStyled = styled.header<StyledComponentProps>`
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.textMenuColor};
    margin-right: 1rem;
`;

export const LabelHeaderNameStyled = styled.span<StyledComponentProps>`
    font-size: 1rem;
    color: ${(props) => props.theme.textMenuColor};
    font-weight: 200;
`;