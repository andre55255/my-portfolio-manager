import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ShowPasswordIcon = styled.span<StyledComponentProps>`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;

    svg {
      color: ${props => props.theme.primaryColor};
    }
`;

export const InputContainer = styled.div`
    position: relative;
`;
