import { Button } from "./styled";
import { ReactNode } from "react";

type ButtonNormalProps = {
    children: ReactNode;
    disabled: boolean;
};

export default function ButtonNormal({ children, disabled }: ButtonNormalProps) {
    return <Button type="submit" disabled={disabled} >{children}</Button>;
}
