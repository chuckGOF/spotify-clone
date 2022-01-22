import React from "react";
import "../styles/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "../StateProvider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useStateValue();
	
	const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
	};
	
	const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  // console.log(discover_weekly)
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0]?.url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleOutlineIcon onClick={playPlaylist} className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks?.items?.map((item, index) => (
          <SongRow playSong={playSong} key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
