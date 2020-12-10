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
		["x", "o", null],
		["x", "x", "o"],
		["o", null, "o"]
	]);
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
