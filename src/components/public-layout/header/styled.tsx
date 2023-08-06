import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ContainerHeader = styled.header<StyledComponentProps>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 0;
    height: 20vh;

    svg {
        color: ${props => props.theme.colorLabelForm};
        font-size: 1.5rem;
        transition: all .5s;
        cursor: pointer;

        &:hover {
            font-size: 1.7rem;
        }
    }
`;

export const ImageHeaderLogo = styled.img<StyledComponentProps>`
    width: 16rem;
`