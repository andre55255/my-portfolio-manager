import { ContainerListStyled } from "../list-screen/styled";
import Loading from "../loading";
import TitlePage from "../title-page";
import { ReactNode } from "react";

type CreateScreenComponentProps = {
    title: string;
    isFetchingPage?: boolean;
    children: ReactNode;
};

export default function CreateScreenComponent({
    title,
    isFetchingPage,
    children
}: CreateScreenComponentProps) {
    return (
        <ContainerListStyled>
            <TitlePage>{title}</TitlePage>
            {children}
            {isFetchingPage && (
                <Loading isFetching={isFetchingPage} isArea={true} />
            )}
        </ContainerListStyled>
    );
}
