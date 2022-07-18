import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 20px;
    input,
    select {
        font-size: 18px;
    }
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
`;

const TextInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const CheckBoxInput = styled.input`
    width: 100%;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const SelectInput = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
`;

export { Wrapper, InputWrapper, CheckBoxInput, SelectInput, TextInput, ErrorMessage };
