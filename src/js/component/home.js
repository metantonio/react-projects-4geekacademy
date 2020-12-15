import React, { useEffect, useState } from "react";
import "bootstrap";

//create your first component

//Para este proyecto de To Do List with Fetch, primero hay que crear nuestro usuario en la API de BreathCode
//API:  https://assets.breatheco.de/apis/fake/todos/
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

	return (
		<>
			<div className="container-fluid col-8">
				<h1 className="text-center">To Do List</h1>

				<div className="card">
					<input
						placeholder="escribir nueva tarea"
						value={tarea}
						onKeyDown={e => {
							if (e.keyCode == "13") {
								let mostrarLista = [];
								for (let i = 0; i < lista.length; i++) {
									mostrarLista.push(lista[i]);
								}
								mostrarLista.push(tarea);
								guardarLista(mostrarLista);
								guardarTarea((e.target.value = ""));
							}
						}}
						onChange={e => {
							guardarTarea(e.target.value);
						}}
						type="text"
					/>
					<ul className="list-group list-group-flush">
						{lista.map((cosas, index) => {
							return (
								<>
									<li
										key={index}
										className="list-group-item d-flex justify-content-between">
										{cosas}
										<button
											className="btn btn-light"
											onClick={e => {
												deleteItems(index);
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
							: "Agregar tareas"}
					</p>
				</div>
			</div>
		</>
	);
};
export default Home;
