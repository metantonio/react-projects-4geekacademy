import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const AudioApp = props => {
	const [songs, setSongs] = useState([
		{
			id: 1,
			name: "cambur pintor",
			url: "alguna url",
			category: "grunge"
		},
		{
			id: 2,
			name: "cambur pintor",
			url: "alguna url",
			category: "grunge"
		},
		{
			id: 3,
			name: "cambur pintor",
			url: "alguna url",
			category: "grunge"
		}
	]);
	const [selectedID, setSelectedID] = useState(null);

	const BASE_URL = "https://assets.breatheco.de/apis/sound";
	useEffect(() => {
		let url = `${BASE_URL}/songs`;
		//let songs = response.body;
		fetch(url)
			.then(response => {
				//console.log("se resolvió la petición al servidor");
				return response.json();
			})
			.then(songList => {
				setSongs(songList);
			})
			.catch(error => console.log(`{error}`));
		//este then es para esperar que haya respuesta del servidor
	}, []);

	const audioPlayer = useRef(null); //la propiedad por default de useRef es current
	//audioPlayer es un objeto que tiene una propiedad current: null

	useEffect(() => {
		audioPlayer.current.play(); //cada vez que se elije una canción ejecutará el método play
		[selectedID];
	}, []);

	return (
		<div className="container-fluid justify-content-center">
			<div className="row d-flex justify-content-center">
				<ul className="songs-list col-md-6 ">
					{songs.map((song, indexNumber) => {
						return (
							<li
								key={song.id}
								className="song"
								onClick={e => setSelectedID(song.id)}>
								<span className="song-number">
									{indexNumber + 1}
								</span>
								{song.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="row d-flex justify-content-center controls p-3 bg-dark">
				<audio
					ref={audioPlayer}
					autoPlay=""
					src={
						selectedID && `${BASE_URL}/${songs[selectedID - 1].url}`
					}
					controls
				/>
			</div>
		</div>
	);
};

AudioApp.protoTypes = {};

export default AudioApp;
