import React from "react";
// import { useStateValue } from "../StateProvider";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/Player.css";

function Player() {
	// const [{ user }] = useStateValue();
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default Player;
