import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DataContext from '../../../hooks/DataContext';
import { Wrapper, Top, Logo, Bottom, Button } from './Styles';

export default function MainPage() {
    const { token, setToken } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token]);

    return (
        <Wrapper>
            <Top>
                <Logo>DrivenPass</Logo>
                <Button onClick={clearToken}>Sair</Button>
            </Top>
            <Bottom>
                <Outlet />
            </Bottom>
        </Wrapper>
    );

    function clearToken() {
        setToken(null);
    }
}
