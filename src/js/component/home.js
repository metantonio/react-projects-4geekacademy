import React, { useState } from "react";

//create your first component
export function Home() {
	const [statusPlay, setStatusPlay] = useState({
		status: "init",
		winner: null
	});
	const [players, setPlayers] = useState([
		{
			name: "",
			suit: "x"
		},
		{
			name: "",
			suit: "o"
		}
	]);

	const [board, setBoard] = useState([
		//por ahora se podría cambiar manualmente los valores para comprobar
		["x", "o", null],
		["x", "o", "x"],
		["o", null, "o"]
	]);

	const evaluarPartida = boardHere => {
		let winner = "";
		//a continuación se proponen las coordenadas ganaradoras en la matriz 3x3
		/*const lines = [
			[00, 01, 02], //esta serían las coordenadas de la fila 1 (están en número, tal vez me convenga texto ya que podría dar error el octal 00)
			[10, 11, 12],
			[20, 21, 22],
			[00, 10, 20], //estas serían las coordenadas de la columna 1
			[01, 11, 21],
			[02, 12, 22],
			[00, 11, 22], //esta sería una diagonal
			[02, 11, 20] //esta sería la otra diagonal
		];*/
		/*viendo las posiciones posibles están los casos ganadores cuando:
		 -fila son iguales: i0=i1=i2
		 -columnas iguales: 0j=1j=2j
		 -diagonales: i=j ó 02=11=20 */

		//Aquí se empezará a recorrer las filas de la matriz para evaluar filas iguales

		/*boardHere.map((row, indexRow) =>{ //esta forma de tratar de integrar el board es incorrecta
			if (row[0] && row[0] == row[1] && row[1] == row[2]) {
				winner = row[0];
				//break;
			}
		}*/

		//como no funcionó la función map, se intentará con loop for
		//nota: boardHere es una variable interna declarada más arriba para meter el Estado board
		for (let row of boardHere) {
			if (row[0] && row[0] == row[1] && row[1] == row[2]) {
				winner = row[0];
				alert("victoria por filas iguales");
				break;
			}
		}
	};

	return (
		<div className="container-fluid">
			<div className="text-center row">
				<div className="container col-10 text-white">
					<h1>Tic Tac Toe in React</h1>
					<h3>Pick a Weapon</h3>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				{statusPlay.status == "init" ? (
					<div className="container w-50 d-flex flex-column text-center text-white align-items-center bg-dark">
						<h4 className="col-12">CHOOSE YOUR WEAPON</h4>
						<div className="row">
							<div className="d-flex flex-column align-items-center m-3">
								<input className="form-control" />
								<i>{"⭕"}</i>
							</div>
							<div className="d-flex flex-column align-items-center m-3">
								<input className="form-control" />
								<i>{"✖"}</i>
							</div>
						</div>
					</div>
				) : (
					<div className="board d-flex flex-wrap ">
						{board.map((row, indexRow) => {
							return (
								<React.Fragment key={indexRow}>
									{row.map((cell, indexCol) => {
										return (
											<div
												key={`${indexRow}-${indexCol}`}
												className="cell d-flex justify-content-center align-items-center">
												<span className="d-flex">
													{cell == "x"
														? "✖"
														: cell == "o"
															? "⭕"
															: ""}
												</span>
											</div>
										);
									})}
								</React.Fragment>
							);
						})}
						;{evaluarPartida(board)};
					</div>
				)}
			</div>
			<div className="row justify-content-center">
				<button
					className="btn btn-primary"
					type="button"
					onClick={e => {
						if (statusPlay.status == "init") {
							setStatusPlay({
								...statusPlay,
								status: "playing"
							});
						} else
							setStatusPlay({
								...statusPlay,
								status: "init"
							});
					}}>
					{statusPlay.status == "init" ? "Iniciar" : "Volver"}
				</button>
			</div>
		</div>
	);
}
