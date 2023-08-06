export type APIResponse<T> = {
    message?: string;
    success: boolean;
    object?: T | undefined;
    status?: number;
};