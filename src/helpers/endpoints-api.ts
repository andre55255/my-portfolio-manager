export const endpointsApi = {
    account: {
        login: "/Account/Login",
        forgotPassword: "/Account/ForgotPassword",
        resetPasswordSignIn: "/Account/ResetPasswordSignIn",
        setSelectedPortfolio: "/Account/SetPortfolioSelected",
        userInfo: "/Account/UserInfo",
    },
    configuration: {
        getAll: "/Configuration"
    },
    portfolio: {
        getPortfoliosToSelect: "/Portfolio/GetPortfoliosToSelect"
    }
}