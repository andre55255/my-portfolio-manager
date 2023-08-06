import { ReactNode } from "react";
import { FormStyled } from "./styled";

type FormDefaultProps = {
    children: ReactNode;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function FormDefault({
    children,
    handleSubmit,
}: FormDefaultProps) {
    return (
        <FormStyled autoComplete="off" onSubmit={handleSubmit}>
            {children}
        </FormStyled>
    );
}
