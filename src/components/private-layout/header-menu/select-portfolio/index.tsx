import { ContainerSelectStyled } from "./styled";
import InputSelectDefault from "../../../forms/input-select-default";
import { SelectObjectType } from "../../../../types/select-object";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/auth-provider";
import { UserInfoContext } from "../../../../providers/user-info-provider";
import {
    validAccessToken,
    verifyResponseRequest,
} from "../../../../helpers/function-utils";
import { getPortfoliosToSelectObject } from "../../../../services/portfolio/select-portfolio-service";
import Loading from "../../../loading";
import { handleSetSelectedPortfolio } from "../../../../services/account/set-portfolio-selected";
import { showToastSuccess } from "../../../../helpers/toast-utils";

export default function SelectPortfolio() {
    const navigate = useNavigate();
    const { logout, accessToken } = useContext(AuthContext);
    const { userInfo } = useContext(UserInfoContext);

    const [portfolios, setPortfolios] = useState<SelectObjectType[]>([]);

    const [portfolioSelected, setPortfolioSelected] = useState<
        number | string | undefined
    >(userInfo?.portfolioSelectedId);

    const [isFetching, setIsFetching] = useState<boolean>(true);

    const getPortfoliosToSelect = async () => {
        setIsFetching(true);
        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const result = await getPortfoliosToSelectObject(accessToken!!);
        const isValidRes = verifyResponseRequest(result, logout!!, navigate);
        if (isValidRes) {
            setPortfolios(result.object!!);
        }
        setIsFetching(false);
    };

    useEffect(() => {
        getPortfoliosToSelect();
    }, []);

    const handleChangeInput = async (
        evt: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setIsFetching(true);

        const value = evt.target.value;
        setPortfolioSelected(value);

        if (!value) {
            setIsFetching(false);
            return;
        }

        const isValidToken = validAccessToken(logout!!, navigate, accessToken);
        if (!isValidToken) return;

        const result = await handleSetSelectedPortfolio(
            accessToken!!,
            Number(value)
        );
        const isValidVerify = verifyResponseRequest(result, logout!!, navigate);
        if (isValidVerify) {
            showToastSuccess({ message: result.message });
        }
        setIsFetching(false);
    };

    return (
        <ContainerSelectStyled>
            <InputSelectDefault
                labelDefaultOption="Selecione um portfolio"
                options={portfolios}
                value={portfolioSelected}
                handleChange={handleChangeInput}
            />
            <Loading isFetching={isFetching} />
        </ContainerSelectStyled>
    );
}
