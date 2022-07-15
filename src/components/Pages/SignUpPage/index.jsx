import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import APIContext from '../../../hooks/APIContext';
import DataContext from '../../../hooks/DataContext';
import {} from './Styles';

export default function SignUpPage() {
    const { setToken } = useContext(DataContext);
    const { API } = useContext(APIContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <p>Sign Up</p>
            <input type='text' placeholder='name' value={name} onChange={handleChangeName} />
            <input type='text' placeholder='email' value={email} onChange={handleChangeEmail} />
            <input type='password' placeholder='senha' value={password} onChange={handleChangePassword} />
            <button onClick={handleSubmit}>Cadastrar</button>
            <button onClick={handleGoTo('/')}>Já tem cadastro? Entre!</button>
        </>
    );

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password);
        const { token } = await API.auth.signUp({ name, email, password });
        if (token) {
            setToken(token);
        }
    }
    function handleChangeName(event) {
        setName(event.target.value);
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
