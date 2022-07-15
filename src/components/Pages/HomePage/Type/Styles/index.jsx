import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.styles.box.lightHover};
`;

const Count = styled.div``;

export { Wrapper, Count };
