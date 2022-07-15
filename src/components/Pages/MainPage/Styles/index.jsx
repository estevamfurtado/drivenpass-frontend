import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Top = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 auto;
`;

const Bottom = styled.main`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Logo = styled.h1`
    font-size: 2em;
    color: black;
    font-weight: bold;
    text-align: center;
`;

const Button = styled.button`
    padding: 10px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

export { Wrapper, Top, Logo, Bottom, Button };
