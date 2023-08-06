import { useTheme } from "../../../hooks/use-theme";
import { ContainerHeader, ImageHeaderLogo } from "./styled";
import logoLight from "../../../assets/logo-ad-cutted.png";
import logoDark from "../../../assets/logo-ad-dark-cutted.png";
import { FaMoon, FaSun } from "react-icons/fa";

export default function HeaderPublicLayout() {
    const { theme, themeToggler } = useTheme();
    
    const handleTheme = () => {
        themeToggler();
        window.location.reload();
    }

    return (
        <ContainerHeader>
            <ImageHeaderLogo src={theme === "dark" ? logoDark : logoLight} alt="logo" />
            {theme === "dark" ?
             <FaSun onClick={handleTheme} /> :
             <FaMoon onClick={handleTheme} />}
        </ContainerHeader>
    );
}