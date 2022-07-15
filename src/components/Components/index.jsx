import styled from 'styled-components';

const StyledVerticalWrapper = styled.h3``;

const VerticalWrapper = (props) => <StyledVerticalWrapper className={props.className}>{props.children}</StyledVerticalWrapper>;
const LightButton = (props) => <StyledLightButton className={props.className}>{props.children}</StyledLightButton>;

export { Wrapper, LightButton };
