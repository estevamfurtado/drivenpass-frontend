import { useContext, useEffect, useState } from 'react';
import APIContext from '../../../../hooks/APIContext';
import { Wrapper, DataWrapper, Button, Title } from './Styles';
import { getTypeColumns } from '../../../../utils/types';
import { useNavigate } from 'react-router-dom';

export default function Pass({ type }) {
    const { API } = useContext(APIContext);
    const [deleteIsDisabled, setDeleteIsDisabled] = useState(false);
    const titleColumn = { key: 'title', label: 'Title' };
    const typeColumns = getTypeColumns(type);
    const columns = [titleColumn, ...typeColumns];
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

    const inputsElements = columns.map(({ label, key }, index) => {
        return (
            <div key={index}>
                <label>{label}</label>
                <input
                    type='text'
                    value={inputs[key]}
                    onChange={(e) => {
                        const newInputs = { ...inputs };
                        newInputs[key] = e.target.value;
                        setInputs(newInputs);
                    }}
                />
            </div>
        );
    });

    return (
        <Wrapper>
            <Title>Novo</Title>
            <DataWrapper>{inputsElements}</DataWrapper>
            <Button onClick={saveButtonHandler}>Save</Button>
        </Wrapper>
    );

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
