import { InputProps } from "../../../types/input-props";
import { FormGroup, FormHelperError, Label } from "../input-normal/styled";
import { ToggleButton, ToggleContainer } from "./styled";
import { useState } from "react";

export default function InputSwitch({
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
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <ToggleContainer isEnable={value} onClick={onChange}>
                <ToggleButton isEnable={value} />
            </ToggleContainer>
            {isInvalid && <FormHelperError>{errorMessage}</FormHelperError>}
        </FormGroup>
    );
}
