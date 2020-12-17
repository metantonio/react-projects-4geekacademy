import React, { useEffect, useState } from "react";
import "bootstrap";

//create your first component

//Para este proyecto de To Do List with Fetch, primero hay que crear nuestro usuario en la API de BreathCode
//API:  https://assets.breatheco.de/apis/fake/todos/
const BASE_URL = "https://assets.breatheco.de/apis/fake/todos";
//Haciendo POST https://assets.breatheco.de/apis/fake/todos/user/metantonio
//dará error porque el servidor pide tener un arreglo vacío en el body (content .JSON), agregarlo. Debe arrojar Status: 200

//La meta es subir la lista actualizada y completa, cada vez. Método PUT
//recordar que los .json tienen las propiedades también con "", en este caso serían "label" y "done"

//Otro objetivo es borrar la lista entera con el método DELETE y obtener la lista entera con el método GET.

const Home = () => {
	const [tarea, guardarTarea] = useState("");
	const [lista, guardarLista] = useState([]);

	const deleteItems = indexItem => {
		guardarLista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	const eliminaTarea = indexItem => {
		let nuevaLista = [];
		guardarLista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
		{
			if (nuevaLista.length > 1) {
				let response = fetch(`${BASE_URL}/user/metantonio`, {
					method: "PUT",
					body: JSON.stringify(nuevaLista),
					headers: {
						"Content-Type": "application/json"
					}
				});
			} else {
				let response = fetch(`${BASE_URL}/user/metantonio`, {
					method: "DELETE",
					body: JSON.stringify(nuevaLista),
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}
		return nuevaLista;
	};

	const crearUsuario = () => {
		let url = `${BASE_URL}/user/metantonio`;
		//por defecto fetch es método GET y .json, el cuerpo del json (la respuesta) es pasada a la variable APILista y se guarda
		fetch(url)
			.then(response => response.json())
			.then(APILista => guardarLista(APILista))
			.catch(error => {
				console.log("está ocurriendo un error");
				{
					let response = fetch(`${BASE_URL}/user/metantonio`, {
						method: "POST",
						body: JSON.stringify([
							{
								label: "sample task",
								done: false
							}
						]),
						headers: {
							"Content-Type": "application/json"
						}
					});
				}
				fetch(url)
					.then(response => response.json())
					.then(APILista => guardarLista(APILista));
			});
	};

	useEffect(() => {
		let url = `${BASE_URL}/user/metantonio`;
		//por defecto fetch es método GET y .json, el cuerpo del json (la respuesta) es pasada a la variable APILista y se guarda
		fetch(url)
			.then(response => response.json())
			.then(APILista => guardarLista(APILista))
			.catch(error => {
				console.log("está ocurriendo un error");
				{
					let response = fetch(`${BASE_URL}/user/metantonio`, {
						method: "POST",
						body: JSON.stringify([
							{
								label: "sample task",
								done: false
							}
						]),
						headers: {
							"Content-Type": "application/json"
						}
					});
				}
				fetch(url)
					.then(response => response.json())
					.then(APILista => guardarLista(APILista));
			});

		//otra forma para no tener .then().then()... de forma que sea más legible
		// const getTask = async () => {
		// 	//esto obliga a javascript a esperar por la promesa
		// 	let response = await fetch(url);
		// 	//ahora response en un valor y no una promesa hasta no tener
		// 	//respuesta del servidor así que habría que esperar a tener respuesta para que response sea una promesa
		// 	let APILista = await response.json();
		// 	guardarLista(APILista);
		// 	if (fetch(url).catch()) {
		// let response = fetch(`${BASE_URL}/user/metantonio`, {
		// 	method: "POST",
		// 	body: JSON.stringify([
		// 		{
		// 			label: "sample task",
		// 			done: false
		// 		}
		// 	]),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// });
		// 	}
		// };
		// getTask(url);
	}, []);

	return (
		<>
			<div className="container-fluid col-8">
				<h1 className="text-center">To Do List</h1>

				<div className="card">
					<input
						placeholder="escribir nueva tarea"
						value={tarea}
						onKeyDown={async e => {
							if (e.keyCode == "13") {
								let mostrarLista = [];
								for (let i = 0; i < lista.length; i++) {
									mostrarLista.push(lista[i]);
								}
								mostrarLista.push({
									label: tarea,
									done: false
								});
								crearUsuario();
								let response = await fetch(
									`${BASE_URL}/user/metantonio`,
									{
										method: "PUT",
										body: JSON.stringify(mostrarLista),
										headers: {
											"Content-Type": "application/json"
										}
									}
								);
								if (response.ok) {
									guardarLista(mostrarLista);
									guardarTarea((e.target.value = ""));
								} else {
									console.log("error cargando");
								}
							}
						}}
						onChange={e => {
							guardarTarea(e.target.value);
						}}
						type="text"
					/>
					<ul className="list-group list-group-flush">
						{lista.map((tareas, index) => {
							return (
								<>
									<li
										key={index}
										className="list-group-item d-flex justify-content-between">
										{tareas.label}
										<button
											className="btn btn-light"
											onClick={async e => {
												// {
												// 	if (lista.length > 1) {
												// 		let response = await fetch(
												// 			`${BASE_URL}/user/metantonio`,
												// 			{
												// 				method: "PUT",
												// 				body: JSON.stringify(
												// 					lista
												// 				),
												// 				headers: {
												// 					"Content-Type":
												// 						"application/json"
												// 				}
												// 			}
												// 		);
												// 	} else {
												// 		let response = fetch(
												// 			`${BASE_URL}/user/metantonio`,
												// 			{
												// 				method:
												// 					"DELETE",
												// 				body: JSON.stringify(
												// 					lista
												// 				),
												// 				headers: {
												// 					"Content-Type":
												// 						"application/json"
												// 				}
												// 			}
												// 		);
												// 	}
												// }
												eliminaTarea(index);
											}}>
											<i
												className="fa fa-times"
												aria-hidden="true"
											/>
										</button>
									</li>
								</>
							);
						})}
					</ul>
					<p className="card-footer text-muted">
						{lista.length > 0
							? `${lista.length} tareas por completar`
							: "Sin tareas por hacer: Usuario Borrado. Recarga la página para crearlo"}
					</p>
				</div>
			</div>
		</>
	);
};
export default Home;
