import { ReactNode } from "react";
import { TitlePageStyled } from "./styled";

type TitlePageProps = {
    children: ReactNode;
};

export default function TitlePage({ children }: TitlePageProps) {
    return <TitlePageStyled>{children}</TitlePageStyled>;
}
