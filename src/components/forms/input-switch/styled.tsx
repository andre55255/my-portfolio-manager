import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ToggleContainer = styled.label<
    StyledComponentProps & { isEnable: boolean }
>`
    display: inline-block;
    width: 54px;
    height: 28px;
    position: relative;
    background-color: ${(props) => (props.isEnable ? "#4CAF50" : "#ccc")};
    border-radius: 17px;
    cursor: pointer;
`;

export const ToggleButton = styled.span<
    StyledComponentProps & { isEnable: boolean }
>`
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
    transform: ${(props) =>
        props.isEnable ? "translateX(26px)" : "translateX(0)"};
`;
