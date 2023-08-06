import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ForgotPassword = styled.span<StyledComponentProps>`
    margin-top: .8rem;
    color: ${props => props.theme.textColor};
    text-decoration: none;
    font-size: .85rem;
    display: inline-block;
    transition: all .2s;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
`;

export const LoginContainer = styled.div<StyledComponentProps>`
    background-color: ${props => props.theme.contentBackground};
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 400px;
`;

export const Title = styled.h2<StyledComponentProps>`
  margin-bottom: .8rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${props => props.theme.titleColor};
`;