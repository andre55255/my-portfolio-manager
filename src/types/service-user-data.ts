export type UserDataType = {
    id: number;
    firstname: string;
    lastname: string;
    userName: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber?: string;
    lockoutEnd?: Date;
    accessFailedCount: number;
    roles: string[];
}