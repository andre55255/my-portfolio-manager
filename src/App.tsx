import Router from "./routes/router";
import { useTheme } from "./hooks/use-theme";
import { GlobalStyles } from "./GlobalStyles";

import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./providers/auth-provider";
import { UserInfoProvider } from "./providers/user-info-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const { getTheme } = useTheme();

    return (
        <CookiesProvider>
            <AuthProvider>
                <UserInfoProvider>
                    <ThemeProvider theme={() => getTheme()}>
                        <GlobalStyles />
                        <ToastContainer
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            closeOnClick
                            hideProgressBar={false}
                            newestOnTop={false}
                            theme="light"
                        />
                        <RouterProvider router={Router} />
                    </ThemeProvider>
                </UserInfoProvider>
            </AuthProvider>
        </CookiesProvider>
    );
};

export default App;
