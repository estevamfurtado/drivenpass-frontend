import { useContext, useEffect, useState } from 'react';
import APIContext from '../../../../hooks/APIContext';
import { Wrapper, DataWrapper, Button, Title } from './Styles';
import { getTypeColumns } from '../../../../utils/types';
import { useNavigate } from 'react-router-dom';
import ColumnInput from './ColumnInput';

export default function Pass({ type }) {
    const { API } = useContext(APIContext);
    const [deleteIsDisabled, setDeleteIsDisabled] = useState(false);

    const typeColumns = getTypeColumns(type);
    const columns = typeColumns.filter((column) => column.show);
    const navigate = useNavigate();
    const [values, setValues] = useState({});

    useEffect(() => {
        // for each column, init value with default value
        const newValues = {};
        columns.forEach((column) => {
            newValues[column.key] = column.defaultValue;
        });
        setValues(newValues);
    }, []);

    const inputsElements = columns.map((column, index) => {
        return <ColumnInput key={index} updateInputsFunction={updateInputs} column={column} value={values[column.key]} />;
    });

    return (
        <Wrapper>
            <Title>Novo</Title>
            <DataWrapper>{inputsElements}</DataWrapper>
            <Button onClick={saveButtonHandler}>Save</Button>
        </Wrapper>
    );

    function updateInputs(key, value) {
        const newInputs = { ...values };
        newInputs[key] = value;
        setValues(newInputs);
    }

    async function saveButtonHandler() {
        if (deleteIsDisabled) return;
        setDeleteIsDisabled(true);
        try {
            console.log('sending values to api', values);
            const result = await API.passes.create({ ...values, type });
            navigate(`/${type}`);
        } catch (e) {
            console.log('Error');
            setDeleteIsDisabled(false);
        }
        setDeleteIsDisabled(false);
    }
}
