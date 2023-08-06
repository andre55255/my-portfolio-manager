import { useState, ReactNode } from "react";
import AsideMenu from "./aside-menu";
import MainSection from "./main-section";

type PrivateLayoutPageProps = {
    children: ReactNode;
};

export default function PrivateLayoutPage({
    children,
}: PrivateLayoutPageProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <AsideMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <MainSection isOpen={isOpen}>{children}</MainSection>
        </>
    );
}
