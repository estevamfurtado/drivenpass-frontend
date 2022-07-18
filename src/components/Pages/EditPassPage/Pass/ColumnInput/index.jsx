import { useState } from 'react';
import { Wrapper, InputWrapper, CheckBoxInput, SelectInput, TextInput, ErrorMessage } from './Styles';

export default function ColumnInput({ column, value, updateInputsFunction }) {
    const { type, label, placeholder, key, config, joiSchema } = column;
    const [inputValue, setInputValue] = useState(value);
    const [edited, setEdited] = useState(false);
    const errorMessage = joiSchema.validate(inputValue).error || null;

    return (
        <Wrapper>
            <label>{label}</label>
            <InputWrapper>
                {inputElementBuilder()}
                {errorMessageBuilder()}
            </InputWrapper>
        </Wrapper>
    );

    function onTextAndSelectChange(e) {
        const col = e.target.name;
        const val = e.target.value;
        saveValues(col, val);
    }

    function onCheckboxChange(e) {
        const col = e.target.name;
        const val = e.target.checked;
        saveValues(col, val);
    }

    function saveValues(col, val) {
        if (!edited) {
            setEdited(true);
        }
        updateInputsFunction(col, val);
        setInputValue(val);
    }

    function inputElementBuilder() {
        switch (type) {
            case 'checkbox':
                return checkboxElementBuilder();
            case 'select':
                return selectElementBuilder();
            default:
                return vanillaInputElementBuilder();
        }
    }

    function checkboxElementBuilder() {
        return <CheckBoxInput type={type} name={key} onChange={onCheckboxChange} defaultChecked={inputValue} />;
    }
    function selectElementBuilder() {
        return (
            <SelectInput name={key} onChange={onTextAndSelectChange} value={inputValue}>
                {config.options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </SelectInput>
        );
    }

    function vanillaInputElementBuilder() {
        return <TextInput type={type} value={inputValue} name={key} onChange={onTextAndSelectChange} placeholder={placeholder} />;
    }

    function errorMessageBuilder() {
        return errorMessage && edited ? <ErrorMessage>{errorMessage.message}</ErrorMessage> : <></>;
    }
}
