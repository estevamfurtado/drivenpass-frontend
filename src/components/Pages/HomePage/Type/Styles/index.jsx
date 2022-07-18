import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #dae6f0;
    color: #2c6fa3;
    border-radius: 50%;
`;

export { Wrapper, Count };
