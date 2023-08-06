import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ContainerFooterPublic = styled.footer<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

export const FooterSignature = styled.small<StyledComponentProps>`
    color: ${(props) => props.theme.textMenuColor};
    font-size: 1rem;
    font-weight: 400;

    svg {
        vertical-align: middle;
        font-size: 1.2rem;
        color: #F70707;
    }
`;