import { ReactNode } from "react";
import { FormStyled, SeparatorStyled } from "./styled";
import ButtonNormal from "../button-normal";
import Loading from "../../loading";

type FormDefaultProps = {
    children: ReactNode;
    isFetching: boolean;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function FormDefault({
    children,
    isFetching,
    handleSubmit,
}: FormDefaultProps) {
    return (
        <FormStyled autoComplete="off" onSubmit={handleSubmit}>
            {children}
            <SeparatorStyled />
            <ButtonNormal disabled={isFetching ? true : false}>
                {isFetching ? <Loading isFetching={isFetching} /> : "Enviar"}
            </ButtonNormal>
        </FormStyled>
    );
}
