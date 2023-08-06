export type InputProps = {
    type: "text" | "password" | "email";
    name: string;
    placeholder?: string;
    label: string;
    maxLength?: number;
    isInvalid: boolean;
    errorMessage: string | undefined;
    onChange: React.ChangeEventHandler | any;
    value: any;
};