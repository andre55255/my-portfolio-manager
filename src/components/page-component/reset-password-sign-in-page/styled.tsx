import { styled } from "styled-components"
import { StyledComponentProps } from "../../../types/styled-component-props"

export const ContainerResetPassword = styled.div<StyledComponentProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 30px;

    @media (min-width: 1000px) {
        padding: 0 250px;
    }
`
