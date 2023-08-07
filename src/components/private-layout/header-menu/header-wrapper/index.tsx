import { ReactNode } from "react";
import { HeaderWrapperStyled, LabelHeaderNameStyled } from "./styled";

type HeaderWrapperProps = {
    children: ReactNode;
    label: string;
}

export default function HeaderWrapper({ children, label }: HeaderWrapperProps) {
    return (
        <HeaderWrapperStyled>
            <LabelHeaderNameStyled>{label}</LabelHeaderNameStyled>
            {children}
        </HeaderWrapperStyled>
    );
}