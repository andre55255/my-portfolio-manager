import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ContainerHeader = styled.header<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    height: 20vh;
`;

export const ImageHeaderLogo = styled.img<StyledComponentProps>`
    width: 16rem;
`