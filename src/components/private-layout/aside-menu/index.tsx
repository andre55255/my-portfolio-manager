import { useContext } from "react";
import SidebarWrapper from "./sidebar-wrapper";
import LogoDetails from "./logo-details";
import SidebarNavList from "./sidebar-nav-list";
import SidebarListItem from "./sidebar-list-item";
import { UserInfoContext } from "../../../providers/user-info-provider";
import { menusFiltered } from "../../../helpers/menus";

type AsideMenuProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function AsideMenu({ isOpen, toggleSidebar }: AsideMenuProps) {
    const { userInfo } = useContext(UserInfoContext);

    const handleMenus = () => {
        if (userInfo) {
            return menusFiltered(userInfo?.roles);
        }
        return [];
    }

    return (
        <SidebarWrapper isOpen={isOpen}>
            <LogoDetails isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <SidebarNavList>
                {handleMenus().map(item => (
                    <SidebarListItem
                        key={item.label} 
                        href={item.href}
                        Icon={item.Icon}
                        isOpen={isOpen}
                        label={item.label}
                    />
                ))}
            </SidebarNavList>
        </SidebarWrapper>
    );
}
