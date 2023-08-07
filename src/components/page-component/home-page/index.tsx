import { UserInfoContext } from "../../../providers/user-info-provider";
import { JumbotronStyled, SubtitleStyled, TitleStyled } from "./styled";
import { useContext } from "react";

export default function HomePageComponent() {
    const { userInfo } = useContext(UserInfoContext);

    return (
        <JumbotronStyled>
            <TitleStyled>Olá {userInfo?.firstname}, Bem vindo ao Sistema de Gerenciamento de Portfólio</TitleStyled>
            <SubtitleStyled>
                Comece a compartilhar suas incríveis realizações profissionais!
            </SubtitleStyled>
        </JumbotronStyled>
    );
}
