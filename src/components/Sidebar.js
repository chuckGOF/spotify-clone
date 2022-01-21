import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "../StateProvider";

function Sidebar({ spotify }) {
	const [{ playlists }, dispatch] = useStateValue();
	// console.log(playlists);

	const handleClick = (playlist_uri) => {
		let uri = playlist_uri.uri.split(':')

		spotify.getPlaylist(uri[2]).then((resp) => {
			dispatch({
				type: "SET_DISCOVER_WEEKLY",
				discover_weekly: resp,
			});
		});
	};

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>

			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

			<br />
			<strong className="sidebar__title">PLAYLIST</strong>
			<hr />

			{/* <SidebarOption title="Hip Hop" />
			<SidebarOption title="ROCK" />
			<SidebarOption title="RNB" /> */}

			{playlists?.items?.map((playlist, index) => (
				<SidebarOption
					handleClick={handleClick}
					uri={playlist.uri}
					key={index}
					title={playlist.name}
				/>
			))}
		</div>
	);
}

export default Sidebar;
