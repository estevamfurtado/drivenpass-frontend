import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    overflow-y: scroll;
`;

const DataWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

export { Wrapper, DataWrapper, Button, Title };
