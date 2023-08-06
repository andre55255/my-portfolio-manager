import { UserDataType } from "./service-user-data";

export type FormLoginType = {
    userName: string;
    password: string;
}

export type LoginResponseType = {
    accessToken: string;
    refreshToken: string;
    expirationAt: Date;
    user: UserDataType;
}