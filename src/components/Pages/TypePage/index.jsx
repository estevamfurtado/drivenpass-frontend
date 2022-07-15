import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import APIContext from '../../../hooks/APIContext';
import DataContext from '../../../hooks/DataContext';
import Pass from './Pass';
import { Wrapper, Button, Title, Passes } from './Styles';

export default function TypePage() {
    const navigate = useNavigate();

    const { API } = useContext(APIContext);
    const { token } = useContext(DataContext);
    const [passes, setPasses] = useState([]);
    const type = useParams().type;

    const typeTitle = type.charAt(0).toUpperCase() + type.slice(1) + 's';

    useEffect(() => {
        if (token) {
            updatePasses();
        }
    }, [token]);

    const passesElements = passes.map((pass) => {
        return <Pass key={pass.id} pass={pass} />;
    });

    return (
        <Wrapper>
            <Button onClick={goHome}>{'<'}</Button>
            <Title>{typeTitle}</Title>
            <Passes>{passesElements}</Passes>
            <Button onClick={addButtonHandler}>+</Button>
        </Wrapper>
    );

    async function updatePasses() {
        const resultData = await API.passes.getByType(type);
        setPasses(resultData);
    }
    async function goHome() {
        navigate('/home');
    }
    async function addButtonHandler() {
        navigate('./new');
    }
}
