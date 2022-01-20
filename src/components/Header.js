import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
// import { useStateValue } from "../StateProvider";

function Header() {
  // const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" text="text" />
      </div>

      <div className="header__right">
        {/* <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4> */}
        <Avatar src="" alt="GF" />
        <h4>GF</h4>
      </div>
    </div>
  );
}

export default Header;
