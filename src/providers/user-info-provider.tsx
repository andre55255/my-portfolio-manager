import { createContext, ReactNode, useState } from "react";
import { UserInfoType } from "../types/user-info";

type UserInfoContextProps = {
    userInfo?: UserInfoType;
    setUserInfo?: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}

export const UserInfoContext = createContext<UserInfoContextProps>({  });

type userInfoProviderProps = {
    children: ReactNode;
}

export const UserInfoProvider = ({ children }: userInfoProviderProps) => {
    const [userInfo, setUserInfo] = useState<UserInfoType>();

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
}