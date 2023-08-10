import { createContext, ReactNode } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../helpers/constants";

type AuthContextProps = {
    login?: ((accessToken: string, refreshToken: string) => void) | undefined;
    logout?: () => void | undefined;
};

export const AuthContext = createContext<AuthContextProps>({});

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const login = (accessToken: string, refreshToken: string) => {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    };

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
