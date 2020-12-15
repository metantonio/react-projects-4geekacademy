import React, { useEffect, useState } from "react";

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
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);

	const evaluarPartida = boardHere => {
		let winner = "";
		//a continuación se proponen las coordenadas ganadoras en la matriz 3x3
		/*const lines = [
			[00, 01, 02], //esta serían las coordenadas de la fila 1 (están en número, tal vez me convenga texto ya que podría dar error el octal 00)
			[10, 11, 12], //fila 2
			[20, 21, 22], //fila 3
			[00, 10, 20], //estas serían las coordenadas de la columna 1
			[01, 11, 21], //col 2
			[02, 12, 22], //col 3
			[00, 11, 22], //esta sería una diagonal
			[02, 11, 20] //esta sería la otra diagonal
		];*/
		/*viendo las posiciones posibles están los casos ganadores cuando:
		 -fila son iguales: i0=i1=i2
		 -columnas iguales: 0j=1j=2j
		 -diagonales: i=j ó 02=11=20 */

		//Aquí se empezará a recorrer las filas de la matriz para evaluar filas iguales

		/*boardHere.map((row, indexRow) =>{ //esta forma de tratar de integrar el board es incorrecta y row es un número no un arreglo
			if (row[0] && row[0] == row[1] && row[1] == row[2]) {
				winner = row[0];
				//break;
			}
		}*/

		//como no funcionó la función map, se intentará con loop for
		let columns = [[], [], []]; //se sabe que esta es la estructura de las coordenadas ganadoras a buscar
		//nota: boardHere es una variable interna declarada más arriba para meter el Estado board
		for (let row of boardHere) {
			if (row[0] && row[0] == row[1] && row[1] == row[2]) {
				winner = row[0];
				alert("victoria por filas iguales, símbolo ganador: " + winner);
				newGame(board);
				break;
			}
			//se intenta tener ahora la misma estructura de matriz que las coordenadas
			columns[0].push(row[0]);
			columns[1].push(row[1]);
			columns[2].push(row[2]);
		}

		//ahora con la estructura de coordenadas ganadoras creada, se puede evaluar si hay
		//una columna ganadora al tener la misma pinta, en caso de no haber ganador por fila.
		if (winner == "") {
			for (let col of columns) {
				if (col[0] && col[0] == col[1] && col[1] == col[2]) {
					winner = col[0];
					alert(
						"victoria por columnas iguales, símbolo ganador: " +
							winner
					);
					newGame(board);
					break;
				}
			}

			//ahora se evalúan las diagonales
			if (winner == "") {
				if (
					(boardHere[1][1] &&
						boardHere[0][0] == boardHere[1][1] &&
						boardHere[1][1] == boardHere[2][2]) ||
					(boardHere[1][1] &&
						boardHere[2][0] == boardHere[1][1] &&
						boardHere[1][1] == boardHere[0][2])
				) {
					winner = boardHere[1][1];
					alert("victoria por diagonal, símbolo ganador: " + winner);
					newGame(board);
				}
			}
		}
		return winner; //pedimos el Estado de regreso para luego pasarlo por setStatusPlay
	};

	const [turn, setTurn] = useState(null);

	useEffect(() => {
		if (turn == null && status != "playing") {
			setTurn("x");
		} else {
			if (turn == "x" && status != "playing") {
				setTurn("o");
			} else {
				if (turn == "o" && status != "playing") {
					setTurn("x");
				}
			}
		}
	});

	//se hace esta función para saber en qué celda fue hecho el click
	const TurnGame = (indexRow, indexCol) => {
		let newboard = board.map((row, rowIndex) => {
			return row.map((col, colIndex) => {
				return rowIndex == indexRow && colIndex == indexCol
					? turn
					: col;
			});
		});
		setBoard(newboard);
		console.log("ejecutado cambiar turno");
	};

	const newGame = boardOfNewGame => {
		boardOfNewGame = setBoard([
			[null, null, null],
			[null, null, null],
			[null, null, null]
		]);
		return boardOfNewGame;
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
												onClick={e => {
													//evaluarPartida(board);
													TurnGame(
														indexRow,
														indexCol
													);
													evaluarPartida(board);
												}}
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
						;
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
							newGame(board);
						} else {
							setStatusPlay({
								...statusPlay,
								status: "init"
							});
						}
					}}>
					{statusPlay.status == "init" ? "Iniciar" : "Volver"}
				</button>
			</div>
		</div>
	);
}
