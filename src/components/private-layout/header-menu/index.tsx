import { useContext, useState } from "react";
import { UserInfoContext } from "../../../providers/user-info-provider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/auth-provider";
import HeaderWrapper from "./header-wrapper";
import HeaderAvatar from "./header-avatar";
import Dropdown from "./dropdown";
import { routesPages } from "../../../helpers/routes-pages";
import { menusFilteredHeader } from "../../../helpers/menus";
import SelectPortfolio from "./select-portfolio";
import { LabelHeaderNameStyled } from "./header-wrapper/styled";

export default function HeaderMenu() {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserInfoContext);
    const { logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        if (logout) {
            logout();
        }
        navigate(routesPages.login);
    };

    return (
        <>
            <HeaderWrapper>
                <SelectPortfolio />
                <LabelHeaderNameStyled>{`Olá, ${userInfo?.firstname}`}</LabelHeaderNameStyled>
                <HeaderAvatar
                    toggleDropdown={toggleDropdown}
                    name={userInfo?.firstname!!}
                />
            </HeaderWrapper>
            <Dropdown
                isOpen={isOpen}
                logoutFunction={handleLogout}
                listMenus={menusFilteredHeader(userInfo?.roles!!)}
            />
        </>
    );
}
