import React from "react";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import Login from "./components/Login";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear token after save in variable
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          console.log(user);

          dispatch({
            type: "SET_USER",
            user: user
          });
        })
        .catch((error) => console.log(error));

      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist().then((resp) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: resp
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
