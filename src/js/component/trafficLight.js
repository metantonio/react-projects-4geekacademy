import React, { useState } from "react";

//se define la función TrafficLight que será exportada como default y no usará {} en el index.js al ser llamada
const TrafficLight = () => {
	const [lightRed, setLightRed] = useState(""); //definición del hook para luz roja con estado lightRed inicial vacío
	const [lightYellow, setLightYellow] = useState("");
	const [lightGreen, setLightGreen] = useState("");

	//se define la función constante, onLight, para encender cada luz del semáforo cada vez que haya una coincidencia con la variable local color
	const onLight = color => {
		//primer condicional cuando la función color adquiere el valor red.
		if (color === "red") {
			setLightRed("light-on"); //se establece un cambio del estado lightRed a encendido, light-on, a través de setLightRed
			setLightYellow(""); //lightYellow y lightGreen permanecen en vacío ""
			setLightGreen("");
		} else if (color === "yellow") {
			//segundo condicional cuando color coincide con yellow
			setLightRed("");
			setLightYellow("light-on");
			setLightGreen("");
		} else if (color === "green") {
			//tercera parte del condicional cuando color coincide con green
			setLightRed("");
			setLightYellow("");
			setLightGreen("light-on");
		}
	};
	//Una vez definido los estados es momento de renderizarlos en el documento HTML a través de return()

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
