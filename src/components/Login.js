import React from "react";
import { loginUrl } from "../spotify";
import "../styles/Login.css";

function Login() {
	return (
		<div className="login">
			<img
				className="login__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>

			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
