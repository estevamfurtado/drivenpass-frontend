import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Title = styled.h3``;

export { Wrapper, Title };
