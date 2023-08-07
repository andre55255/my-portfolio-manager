import { AvatarSpan, ContainerAvatar } from "./styled";

type HeaderAvatarProps = {
    toggleDropdown: () => void;
    name: string;
};

export default function HeaderAvatar({
    toggleDropdown,
    name,
}: HeaderAvatarProps) {
    return (
        <ContainerAvatar onClick={toggleDropdown}>
            <AvatarSpan>{name ? name[0] : ""}</AvatarSpan>
        </ContainerAvatar>
    );
}
