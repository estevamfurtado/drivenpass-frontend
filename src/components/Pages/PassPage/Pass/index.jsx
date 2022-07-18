import { useContext, useState } from 'react';
import APIContext from '../../../../hooks/APIContext';
import { Wrapper, DataWrapper, Button, Title } from './Styles';
import { getTypeColumns } from '../../../../utils/types';
import { useNavigate } from 'react-router-dom';

export default function Pass({ type, pass }) {
    const { API } = useContext(APIContext);
    const [deleteIsDisabled, setDeleteIsDisabled] = useState(false);
    const columns = getTypeColumns(type);

    const navigate = useNavigate();

    const filteredData = columns.filter((column) => column.show && column.key !== 'title');
    const dataElement = filteredData.map(({ label, key }, index) => {
        return (
            <div key={index}>
                <h3>{label}</h3>
                <p>{pass[key] ? pass[key] : ''}</p>
            </div>
        );
    });

    return (
        <Wrapper>
            <Title>{pass.title}</Title>
            <DataWrapper>{dataElement}</DataWrapper>
            <Button onClick={deleteButtonHandler}>Delete</Button>
        </Wrapper>
    );

    async function deleteButtonHandler() {
        if (deleteIsDisabled) return;
        setDeleteIsDisabled(true);
        try {
            await API.passes.deleteById(pass.id);
            navigate(`/${type}`);
            setDeleteIsDisabled(false);
        } catch {
            console.log('Error');
            setDeleteIsDisabled(false);
        }
    }
}
