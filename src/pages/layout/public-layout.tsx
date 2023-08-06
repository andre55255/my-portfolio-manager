import React from "react";

type AuxProps = {
    children: React.ReactNode;
}

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
           {children}
        </>
    );
}