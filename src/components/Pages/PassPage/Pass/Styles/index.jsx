import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
`;

const DataWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    h3 {
        color: #aaa;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 10px;
    }

    margin-bottom: 30px;
`;

const Button = styled.button`
    padding: 10px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Title = styled.h2`
    font-size: 24px;
`;

export { Wrapper, DataWrapper, Button, Title };
