import React, { useState } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { CRT, Typer } from "./components";

const Style = createGlobalStyle`
	html, body, #root {
		height: 100%;
	}
  body {
		margin: unset;
    color: white;
    font-family: "Press Start 2P", cursive;
  }
`;

function App() {
	let [loginFinished, setLoginFinished] = useState(false);
	let [passowrdFinished, setPasswordFinished] = useState(false);

	return (
		<>
			<CRT>
				<p>
					login: <Typer text="guest" onDone={() => setLoginFinished(true)} />
				</p>
				{loginFinished && (
					<p>
						password: <Typer text="*****" onDone={() => setPasswordFinished(true)} />
					</p>
				)}
				{passowrdFinished && <p>Welcome! My name is Askhat. I'm a web developer.</p>}
			</CRT>
			<Style />
		</>
	);
}

render(<App />, document.getElementById("root"));
