import { useNavigate } from 'react-router-dom';
import { Wrapper, Title } from './Styles';

export default function Pass({ pass }) {
    const navigate = useNavigate();

    return (
        <Wrapper
            onClick={() => {
                navigate(`./pass/${pass.id}`);
            }}
        >
            <Title>{pass.title}</Title>
        </Wrapper>
    );
}
