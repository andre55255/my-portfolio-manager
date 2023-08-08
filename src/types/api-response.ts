export type APIResponse<T> = {
    message?: string;
    success: boolean;
    object?: T | undefined;
    status?: number;
};

export type ListPaginatedType<T> = {
    items: T[] | undefined;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}