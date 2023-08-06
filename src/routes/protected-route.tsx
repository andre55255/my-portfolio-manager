import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { routesPages } from "../helpers/routes-pages";
import PrivateLayout from "../pages/layout/private-layout";

export const ProtectedRoute = () => {
    const { accessToken } = useAuth();
    if (!accessToken) {
        return <Navigate to={routesPages.login} />;
    }
    
    return (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    );
};
