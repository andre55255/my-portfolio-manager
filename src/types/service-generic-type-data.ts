export type GenericType = {
    id: number;
    token: string;
    value: string;
    description: string;
    valueBool?: boolean;
}

export type SaveGenericType = {
    token: string;
    value: string;
    description: string;
    valueBool?: boolean;
}