import React, { useEffect, useState } from "react";

//create your first component
export function Home() {
	const [statusPlay, setStatusPlay] = useState({
		status: "init",
		winner: null
	});
	
	useEffect(
		() => {
			
		},
		[] //mientras no se actualice el board, no ocurre el useEffect
	);

	return ();
}
