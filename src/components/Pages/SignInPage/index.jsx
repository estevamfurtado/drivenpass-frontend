import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIContext from '../../../hooks/APIContext';
import DataContext from '../../../hooks/DataContext';
import {} from './Styles';

export default function SignInPage() {
    const { setToken } = useContext(DataContext);
    const { API } = useContext(APIContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <p>Sign In</p>
            <input type='text' placeholder='email' value={email} onChange={handleChangeEmail} />
            <input type='password' placeholder='senha' value={password} onChange={handleChangePassword} />
            <button onClick={handleSubmit}>Entrar</button>
            <button onClick={handleGoTo('/sign-up')}>Não tem cadastro? Cadastre-se!</button>
        </>
    );

    async function handleSubmit(event) {
        event.preventDefault();
        const { token } = await API.auth.signIn({ email, password });
        if (token) {
            setToken(token);
        }
    }
    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }
    function handleGoTo(route) {
        return () => {
            navigate(route);
        };
    }
}
