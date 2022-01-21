import React from "react";
import "../styles/Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useStateValue } from "../StateProvider";

function Footer({ spotify }) {
	const [{ current_playing, discover_weekly }] = useStateValue();

	// spotify.play({ context_uri: discover_weekly?.tracks?.items[0]?.track?.uri})

	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src={
						current_playing
							? current_playing.images[0].url
							: discover_weekly?.tracks?.items[0]?.track?.album
									?.images[0]?.url
					}
					// src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>
						{current_playing
							? current_playing.name
							: discover_weekly?.tracks?.items[0]?.track?.name}
					</h4>
					<p>
						nothing
						{/* {current_playing.artists
							.map((artist) => artist.name)
							.join(", ")}{" "}
						-{" "} */}
					</p>
				</div>
			</div>

			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon
					fontSize="large"
					className="footer__icon"
				/>
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>

			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
