export const endpointsApi = {
    account: {
        login: "/Account/Login",
        forgotPassword: "/Account/ForgotPassword",
        refreshToken: "/Account/Refresh",
        resetPasswordSignIn: "/Account/ResetPasswordSignIn",
        setSelectedPortfolio: "/Account/SetPortfolioSelected",
        userInfo: "/Account/UserInfo",
    },
    configuration: {
        rest: "/Configuration"
    },
    genericType: {
        rest: "/GenericType"
    },
    portfolio: {
        getPortfoliosToSelect: "/Portfolio/GetPortfoliosToSelect"
    }
}