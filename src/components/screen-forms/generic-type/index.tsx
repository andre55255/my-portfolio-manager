import { useFormik, FormikHelpers } from "formik";
import { useEffect } from "react";
import FormDefault from "../../forms/form-default";
import InputNormal from "../../forms/input-normal";
import { SaveGenericType } from "../../../types/service-generic-type-data";
import { FormGenericTypeSchema } from "../../../yup-config/generic-type-schema";
import InputSwitch from "../../forms/input-switch";

type ScreenFormGenericProps = {
    isFetching: boolean;
    handleSubmit: (
        values: SaveGenericType,
        formikHelpers: FormikHelpers<SaveGenericType>
    ) => void | Promise<any>;
    values?: SaveGenericType;
};

export default function ScreenFormGeneric({
    isFetching,
    handleSubmit,
    values,
}: ScreenFormGenericProps) {
    const initialValues: SaveGenericType = {
        token: "",
        description: "",
        value: "",
        valueBool: undefined,
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormGenericTypeSchema,
    });

    useEffect(() => {
        if (!values) return;

        formik.setFieldValue("token", values.token || "");
        formik.setFieldValue("description", values.description || "");
        formik.setFieldValue("value", values.value || "");
        formik.setFieldValue("valueBool", values.valueBool || undefined);
    }, [values]);

    return (
        <FormDefault handleSubmit={formik.handleSubmit} isFetching={isFetching}>
            <InputNormal
                label="Token"
                name="token"
                type="text"
                placeholder="Digite seu token"
                value={formik.values.token}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.token && formik.errors.token ? true : false
                }
                errorMessage={formik.errors.token}
            />
            <InputNormal
                label="Valor"
                name="value"
                type="text"
                placeholder="Digite o valor"
                value={formik.values.value}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.value && formik.errors.value ? true : false
                }
                errorMessage={formik.errors.value}
            />
            <InputNormal
                label="Descrição"
                name="description"
                type="text"
                placeholder="Digite o valor da descrição"
                value={formik.values.description}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.description && formik.errors.description
                        ? true
                        : false
                }
                errorMessage={formik.errors.description}
            />
            <InputSwitch
                label="Valor Booleano"
                name="valueBool"
                type="text"
                value={formik.values.valueBool}
                onChange={() => {
                    formik.setFieldValue("valueBool", !formik.values.valueBool);
                }}
                isInvalid={
                    formik.touched.valueBool && formik.errors.valueBool
                        ? true
                        : false
                }
                errorMessage={formik.errors.valueBool}
            />
        </FormDefault>
    );
}
