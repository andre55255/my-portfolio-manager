import React from "react";

type AuxProps = {
    children: React.ReactNode;
}

export default function PrivateLayout({ children }: AuxProps) {
    return (
        <>
            {children}
        </>
    );
} 