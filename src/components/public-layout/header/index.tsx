import { useTheme } from "../../../hooks/use-theme";
import { ContainerHeader, ImageHeaderLogo } from "./styled";
import logoLight from "../../../assets/logo-ad-cutted.png";
import logoDark from "../../../assets/logo-ad-dark-cutted.png";

export default function HeaderPublicLayout() {
    const { theme } = useTheme();
    
    return (
        <ContainerHeader>
            <ImageHeaderLogo src={theme === "dark" ? logoDark : logoLight} alt="logo" />
        </ContainerHeader>
    );
}