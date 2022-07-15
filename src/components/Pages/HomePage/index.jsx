import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../../hooks/DataContext';
import APIContext from '../../../hooks/APIContext';
import { Wrapper, Types } from './Styles';
import Type from './Type';

export default function HomePage() {
    const navigate = useNavigate();

    const { token } = useContext(DataContext);
    const { API } = useContext(APIContext);

    const [typeCounters, setTypeCounters] = useState([]);

    useEffect(() => {
        if (token) {
            updateTypeCounters();
        }
    }, [token]);

    const types = typeCounters.map((typeCounter, i) => {
        return <Type key={i} data={typeCounter} />;
    });

    return (
        <Wrapper>
            <Types>{types}</Types>
        </Wrapper>
    );

    async function updateTypeCounters() {
        const resultData = await API.passes.getAll();
        setTypeCounters(resultData);
    }
}
