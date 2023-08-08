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
import LoginPage from "../pages/public/login";
import ForgotPasswordPage from "../pages/public/forgot-password";

import HomePage from "../pages/private/home";
import ResetPasswordSignInPage from "../pages/private/reset-password-sign-in";

import ConfigurationTokenPage from "../pages/private/configuration-token/list";
import ConfigurationTokenCreatePage from "../pages/private/configuration-token/create";
import ConfigurationTokenEditPage from "../pages/private/configuration-token/edit";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Auth Layout */}
            <Route element={<AuthLayout />}>
                {/* Public routes */}
                <Route element={<PublicRoute />}>
                    <Route path={routesPages.login} element={<LoginPage />} />
                    <Route
                        path={routesPages.forgotPassword}
                        element={<ForgotPasswordPage />}
                    />
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path={routesPages.configuration.create} element={<ConfigurationTokenCreatePage />} />
                    <Route path={routesPages.configuration.edit} element={<ConfigurationTokenEditPage />} />
                    <Route
                        path={routesPages.configuration.list}
                        element={<ConfigurationTokenPage />}
                    />

                    <Route path={routesPages.home} element={<HomePage />} />
                    <Route
                        path={routesPages.resetPasswordSignIn}
                        element={<ResetPasswordSignInPage />}
                    />
                </Route>
            </Route>

            {/* Rota não encontrada */}
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;
