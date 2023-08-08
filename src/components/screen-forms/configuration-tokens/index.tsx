import { useFormik, FormikHelpers } from "formik";
import { useEffect } from "react";
import ButtonNormal from "../../forms/button-normal";
import FormDefault from "../../forms/form-default";
import InputNormal from "../../forms/input-normal";
import Loading from "../../loading";
import { ConfigurationSaveType } from "../../../types/service-configuration-data";
import { FormConfigurationSchema } from "../../../yup-config/configuration-schema";

type ScreenFormConfigurationProps = {
    isFetching: boolean;
    handleSubmit: (
        values: ConfigurationSaveType,
        formikHelpers: FormikHelpers<ConfigurationSaveType>
    ) => void | Promise<any>;
    values?: ConfigurationSaveType;
};

export default function ScreenFormConfiguration({
    isFetching,
    handleSubmit,
    values,
}: ScreenFormConfigurationProps) {
    const initialValues: ConfigurationSaveType = {
        token: "",
        extra: "",
        value: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: FormConfigurationSchema,
    });

    useEffect(() => {
        if (!values) return;

        formik.setFieldValue("token", values.token || "");
        formik.setFieldValue("value", values.value || "");
        formik.setFieldValue("extra", values.extra || "");
    }, [values]);

    return (
        <FormDefault handleSubmit={formik.handleSubmit}>
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
                label="Extra"
                name="extra"
                type="text"
                placeholder="Digite o valor de extra"
                value={formik.values.extra}
                onChange={formik.handleChange}
                isInvalid={
                    formik.touched.extra && formik.errors.extra ? true : false
                }
                errorMessage={formik.errors.extra}
            />
            <ButtonNormal disabled={isFetching ? true : false}>
                {isFetching ? <Loading isFetching={isFetching} /> : "Enviar"}
            </ButtonNormal>
        </FormDefault>
    );
}
