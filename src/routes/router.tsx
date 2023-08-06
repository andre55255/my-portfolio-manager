import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { PublicRoute } from "./public-route";
import { ProtectedRoute } from "./protected-route";
import { routesPages } from "../helpers/routes-pages";
import { AuthLayout } from "./auth-layout";

import NotFoundPage from "../pages/public/not-found/index";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Auth Layout */}
            <Route element={<AuthLayout />}>
                
                {/* Public routes */}
                <Route element={<PublicRoute />}>
                    
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                
                </Route>
            </Route>

            {/* Rota não encontrada */}
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;