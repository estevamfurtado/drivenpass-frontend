import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    overflow-y: hidden;
    border: 2px solid white;
`;

const Button = styled.button`
    padding: 10px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Title = styled.h3``;

export { Wrapper, Title, Button };
