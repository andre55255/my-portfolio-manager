import { ReactNode } from "react";
import { ContainerMainPublic } from "./styled";

type MainPublicLayoutProps = {
    children: ReactNode;
};

export default function MainPublicLayout({ children }: MainPublicLayoutProps) {
    return <ContainerMainPublic>{children}</ContainerMainPublic>;
}
