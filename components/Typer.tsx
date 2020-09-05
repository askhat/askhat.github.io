import React, { useState, useEffect } from "react";

interface Props {
	text: string;
	onDone(): void;
}

export function* sequnce(iterable: string) {
	for (let char of iterable) yield char;
}

export function Typer({ text, onDone = () => null }: Props) {
	let [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let chars = sequnce(text);
		let id = setInterval(() => {
			let { value, done } = chars.next();
			if (done) {
				clearInterval(id);
				onDone();
			}	else setDisplayText((displayText += value));
		}, 100);
		return () => {
			clearInterval(id);
		};
	}, [text]);

	return <>{displayText}</>;
}
