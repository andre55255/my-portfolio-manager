import { Link } from "react-router-dom";
import {
    DropDownWrapper,
    DropdownContent,
    DropdownItem,
    DropdownLogout,
} from "./styled";
import { FaSignOutAlt } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { MenuProps } from "../../../../helpers/menus";
import { useTheme } from "../../../../hooks/use-theme";

type DropdownProps = {
    isOpen: boolean;
    listMenus: MenuProps[];
    logoutFunction: () => void;
};

export default function Dropdown({ isOpen, listMenus, logoutFunction }: DropdownProps) {
    const { themeToggler, theme } = useTheme();

    return (
        <DropDownWrapper>
            <DropdownContent open={isOpen}>
                {listMenus.map((item) => (
                    <Link to={item.href} key={item.label}>
                        <DropdownItem>
                            {<item.Icon />}
                            {item.label}
                        </DropdownItem>
                    </Link>
                ))}
                <DropdownItem onClick={themeToggler}>
                    {theme === "dark" ? <FiSun /> : <FiMoon />}
                    Alterar tema
                </DropdownItem>
                <DropdownLogout onClick={logoutFunction}>
                    <FaSignOutAlt />
                    Logout
                </DropdownLogout>
            </DropdownContent>
        </DropDownWrapper>
    );
}
