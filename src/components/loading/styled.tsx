import { keyframes, styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const SpinnerContainer = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<StyledComponentProps>`
    width: 1.2rem;
    height: 1.2rem;
    border: 4px solid ${(props) => props.theme.loadingSpinner};
    border-top: 4px solid ${(props) => props.theme.primaryColor};
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
`;
