import { useNavigate } from 'react-router-dom';
import { Wrapper, Count } from './Styles';

export default function Type({ data }) {
    const navigate = useNavigate();

    const title = data.type.charAt(0).toUpperCase() + data.type.slice(1) + 's';
    return (
        <Wrapper onClick={() => navigate(`/${data.type}`)}>
            <h3>{title}</h3>
            <Count>{data.count}</Count>
        </Wrapper>
    );
}
