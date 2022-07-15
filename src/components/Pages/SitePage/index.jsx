import { Outlet } from 'react-router-dom';
import { Wrapper } from './Styles';

export default function SitePage() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}
