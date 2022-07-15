import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Top = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
`;

const Bottom = styled.div`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Logo = styled.h1`
    font-size: 2em;
    color: black;
    font-weight: bold;
    text-align: center;
`;

export { Wrapper, Top, Bottom, Logo };
