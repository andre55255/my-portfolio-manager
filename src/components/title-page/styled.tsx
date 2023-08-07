import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const TitlePageStyled = styled.h2<StyledComponentProps>`
    font-size: 1.3rem;
    font-weight: 500;
    color: ${props => props.theme.textColor};
    margin-bottom: 3rem;
`