import { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import DataContext from '../../../hooks/DataContext';
import { Wrapper, Top, Bottom, Logo } from './Styles';

export default function EnterPage() {
    const { token } = useContext(DataContext);

    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            console.log(token);
            navigate('/home');
        }
    }, [token]);

    return (
        <Wrapper>
            <Top>
                <Logo>Pass</Logo>
            </Top>
            <Bottom>
                <Outlet />
            </Bottom>
        </Wrapper>
    );
}
