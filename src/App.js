import React from "react";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import Login from "./components/Login";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState();

	useEffect(() => {
		const _token = getTokenFromUrl();
		// clear token after save in variable
		window.location.hash = "";

		if (_token) {
			setToken(_token);
			console.log(_token);
			spotify.setAccessToken(_token.access_token);

			spotify.getMe().then((user) => {
				console.log(user);
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
