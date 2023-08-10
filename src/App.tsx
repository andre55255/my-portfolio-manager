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
        <AuthProvider>
            <CookiesProvider>
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
                            theme="dark"
                        />
                        <RouterProvider router={Router} />
                    </ThemeProvider>
                </UserInfoProvider>
            </CookiesProvider>
        </AuthProvider>
    );
};

export default App;
