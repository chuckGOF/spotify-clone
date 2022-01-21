import React from "react";
import "../styles/SongRow.css";
import { useStateValue } from "../StateProvider";

function SongRow({ track }) {
	const [{}, dispatch] = useStateValue();

	const handleClick = (track) => {
		// console.log(track)
		dispatch({
			type: "SET_CURRENT_PLAYING",
			current_playing: track,
		});
	};

	return (
		<div className="songRow" onClick={() => handleClick(track.album)}>
			<img
				className="songRow__album"
				src={track.album.images[0].url}
				alt=""
			/>
			<div className="songRow__info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(", ")} -{" "}
					{track.album.name}
				</p>
			</div>
		</div>
	);
}

export default SongRow;
