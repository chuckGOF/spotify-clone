import React from "react";
// import { useStateValue } from "../StateProvider";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/Player.css";

function Player({ spotify }) {
	// const [{ user }] = useStateValue();
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar spotify={spotify} />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
}

export default Player;
