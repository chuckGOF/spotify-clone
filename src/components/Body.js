import React from "react";
import "../styles/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "../StateProvider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body() {
  const [{ discover_weekly }] = useStateValue();

  console.log(discover_weekly)
  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img
          // src={discover_weekly?.image[0]?.url}
          src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png"
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
          <PlayCircleOutlineIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks?.items?.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
