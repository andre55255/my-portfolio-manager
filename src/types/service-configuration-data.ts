export type ConfigurationType = {
    id: number;
    token: string;
    value?: string;
    extra?: string;
}

export type ConfigurationSaveType = {
    token: string;
    value?: string;
    extra?: string;
}