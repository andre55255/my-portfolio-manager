import { FiHome, FiSettings, FiUsers, FiType, FiLayers } from "react-icons/fi";
import {
    FaRegBookmark,
    FaBriefcase,
    FaProjectDiagram,
    FaStackExchange,
    FaUsers,
    FaLock
} from "react-icons/fa";

import { IconType } from "react-icons";
import { routesPages } from "./routes-pages";
import { ROLES } from "./constants";

export type MenuProps = {
    href: string;
    Icon: IconType;
    label: string;
    roles: string[];
};

const allMenusAside: MenuProps[] = [
    {
        href: routesPages.home,
        label: "Home",
        Icon: FiHome,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.configuration.list,
        label: "Configurações",
        Icon: FiSettings,
        roles: [ROLES.admin],
    },
    {
        href: routesPages.contactMe,
        label: "Contatos",
        Icon: FiUsers,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.experienceEducation,
        label: "Educação",
        Icon: FaRegBookmark,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.experienceWork,
        label: "Profissional",
        Icon: FaBriefcase,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.genericTypes.list,
        label: "Genéricos",
        Icon: FiType,
        roles: [ROLES.admin],
    },
    {
        href: routesPages.portfolio,
        label: "Portfolios",
        Icon: FiLayers,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.projects,
        label: "Projetos",
        Icon: FaProjectDiagram,
        roles: [ROLES.admin, ROLES.user],
    },
    {
        href: routesPages.stacks,
        label: "Stacks",
        Icon: FaStackExchange,
        roles: [ROLES.admin, ROLES.user]
    },
    {
        href: routesPages.users,
        label: "Usuários",
        Icon: FaUsers,
        roles: [ROLES.admin]
    }
];

export const menusFiltered = (roles: string[]) => {
    if (!roles) {
        return [];
    }

    const menus = allMenusAside.filter((menu) => {
        return menu.roles.filter(role => {
            return roles.includes(role);
        });
    })
    return menus;
}

const allMenusHeader: MenuProps[] = [
    {
        href: routesPages.resetPasswordSignIn,
        label: "Alterar senha",
        Icon: FaLock,
        roles: [ROLES.admin, ROLES.user]
    }
]

export const menusFilteredHeader = (roles: string[]) => {
    if (!roles) {
        return [];
    }
    const menus = allMenusHeader.filter((menu) => {
        return menu.roles.filter(role => {
            return roles.includes(role);
        });
    })
    return menus;
}