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
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        if (columns.length > 0) {
            const newInputs = {};
            columns.forEach((column) => {
                newInputs[column.key] = '';
            });
        }
    }, [columns]);

    const inputsElements = columns.map((column, index) => {
        return <ColumnInput key={index} updateInputsFunction={updateInputs} column={column} />;
    });

    return (
        <Wrapper>
            <Title>Novo</Title>
            <DataWrapper>{inputsElements}</DataWrapper>
            <Button onClick={saveButtonHandler}>Save</Button>
        </Wrapper>
    );

    function updateInputs(key, value) {
        const newInputs = { ...inputs };
        newInputs[key] = value;
        setInputs(newInputs);
    }

    async function saveButtonHandler() {
        if (deleteIsDisabled) return;
        setDeleteIsDisabled(true);
        try {
            console.log(inputs);
            await API.passes.create({ type, ...inputs });
            setDeleteIsDisabled(false);
            navigate(`/${type}`);
        } catch (e) {
            setDeleteIsDisabled(false);
            console.log('Error');
        }
    }
}
