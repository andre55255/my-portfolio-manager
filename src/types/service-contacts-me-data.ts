import { FileType } from "./file-data";

export interface FormContactDataType extends FormContactDataApiType {
    file?: string;
}

export interface FormContactDataApiType {
    name: string;
    message: string;
    contact: string;
    fileAttachment?: FileType | null;
}

export interface FormContactListDataApi extends FormContactDataApiType {
    id: number;
}