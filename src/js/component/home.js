import React from "react";
import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron";
import CardTitle from "./cardtitle";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<CardTitle />
			<Footer />
		</>
	);
}
