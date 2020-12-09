import React, { useState } from "react";

const TrafficLight = () => {
	const [lightRed, setLightRed] = useState("");
	const [lightYellow, setLightYellow] = useState("");
	const [lightGreen, setLightGreen] = useState("");

	const onLight = color => {
		if (color === "red") {
			setLightRed("light-on");
			setLightYellow("");
			setLightGreen("");
		} else if (color === "yellow") {
			setLightRed("");
			setLightYellow("light-on");
			setLightGreen("");
		} else if (color === "green") {
			setLightRed("");
			setLightYellow("");
			setLightGreen("light-on");
		}
	};
	return (
		<main>
			<div />
			<div>
				<div
					className={`bg-red ${lightRed}`}
					onClick={() => onLight("red")}
				/>
				<div
					className={`bg-yellow ${lightYellow}`}
					onClick={() => onLight("yellow")}
				/>
				<div
					className={`bg-green ${lightGreen}`}
					onClick={() => onLight("green")}
				/>
			</div>
		</main>
	);
};
export default TrafficLight;
