import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import APIContext from '../../../hooks/APIContext';
import DataContext from '../../../hooks/DataContext';
import Pass from './Pass';
import { Wrapper, Title, Button } from './Styles';

export default function PassPage() {
    const navigate = useNavigate();

    const { token } = useContext(DataContext);
    const { API } = useContext(APIContext);

    const { type, passId } = useParams();
    const [pass, setPass] = useState(null);

    useEffect(() => {
        if (token) {
            getPass();
        }
    }, [token]);

    const passElement = pass ? <Pass type={type} pass={pass} /> : null;

    return (
        <Wrapper>
            <Button onClick={goBack}>{'<'}</Button>
            {passElement}
        </Wrapper>
    );

    function goBack() {
        const path = pass ? `/${pass.type}` : '/home';
        navigate(path);
    }

    async function getPass() {
        try {
            const resultData = await API.passes.getById(passId);
            setPass(resultData);
        } catch {
            setPass(null);
        }
    }
}
