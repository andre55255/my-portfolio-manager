import { useState } from "react";

import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { InputProps } from "../../../types/input-props";

import {
    FormGroup,
    FormHelperError,
    Input,
    Label,
} from "../input-normal/styled";
import { InputContainer, ShowPasswordIcon } from "./styled";

export default function InputPassword({
    type,
    name,
    placeholder,
    label,
    isInvalid,
    errorMessage,
    onChange,
    value,
    maxLength,
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <InputContainer>
                <Input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                />
                <ShowPasswordIcon onClick={handleShowPassword}>
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </ShowPasswordIcon>
            </InputContainer>
            {isInvalid && <FormHelperError>{errorMessage}</FormHelperError>}
        </FormGroup>
    );
}
