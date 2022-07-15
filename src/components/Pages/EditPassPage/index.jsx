import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Pass from './Pass';
import { Wrapper, Title, Button } from './Styles';

export default function EditPassPage() {
    const navigate = useNavigate();
    const { type } = useParams();
    const passElement = <Pass type={type} />;

    return (
        <Wrapper>
            <Button onClick={goBack}>{'<'}</Button>
            {passElement}
        </Wrapper>
    );

    function goBack() {
        const path = `/${type}`;
        navigate(path);
    }
}
