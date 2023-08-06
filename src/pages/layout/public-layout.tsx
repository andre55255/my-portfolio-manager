import React from "react";
import HeaderPublicLayout from "../../components/public-layout/header";
import FooterPublicLayout from "../../components/public-layout/footer";
import MainPublicLayout from "../../components/public-layout/main";

type AuxProps = {
    children: React.ReactNode;
};

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
            <HeaderPublicLayout />
            <MainPublicLayout>{children}</MainPublicLayout>
            <FooterPublicLayout />
        </>
    );
}
