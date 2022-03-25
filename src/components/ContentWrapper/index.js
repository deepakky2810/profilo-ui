import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
	height: ${(props) => `${props.height}vh`};
	width: ${(props) => `${props.width}vw`};
`;
const ContentWrapper = (props) => (
	<Wrapper height={props.height} width={props.width}>
		{props.children}
	</Wrapper>
);

ContentWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
};
ContentWrapper.defaultProps = {
	height: 100,
	width: 100,
};

export default ContentWrapper;
