import styled from 'styled-components';

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
`;

const Button = styled.button`
    padding: 10px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Title = styled.h3``;

const Passes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export { Wrapper, Button, Title, Passes };
