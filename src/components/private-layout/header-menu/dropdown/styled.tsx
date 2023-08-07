import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const DropDownWrapper = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
`;

export const DropdownContent = styled.div<StyledComponentProps & { open: boolean }>`
    display: ${(props) => (props.open ? "block" : "none")};
    background-color: ${(props) => props.theme.bodyBackground};
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const DropdownItem = styled.div<StyledComponentProps>`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 1rem;

    font-size: 0.9rem;
    color: ${(props) => props.theme.textMenuColor};
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const DropdownLogout = styled.div<StyledComponentProps>`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 1rem;

    font-size: 0.9rem;
    color: #f70707;
    cursor: pointer;

    svg {
        color: #f70707;
    }

    &:hover {
        text-decoration: underline;
    }
`;