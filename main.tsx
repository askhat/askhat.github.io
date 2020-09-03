import { render } from "react-dom";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
	margin: 0 auto;
	width: 640px;
	height: 480px;
	object-fit: contain;
`;

const Caption = styled.p`
	text-align: center;
	font-size: 36px;
`;

function App() {
	return (
		<Wrapper>
			<Image src={require("~/assets/wip.png")} />
			<Caption>WIP</Caption>
		</Wrapper>
	);
}

render(<App />, document.getElementById("root"));
