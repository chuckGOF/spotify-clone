export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: null,
	token: "BQCndw4axweZ1gRFzEDC86jN7pcCJgyFmkLAy9OI5PQ41PBxbJV4LoeMmxWQChjKk6Q-Csfw6Qk9Y0eCOd6K6sDZq_qfHhZjUnkv-aSqVPbXiQ5zZMiDM8hW-a4u_e6diq3qxgh89gRsgIGaT_r4EdwFLUXvay6naaMHN96re2fv7IQ0VIRw",
};

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists
			}

		default:
			return state;
	}
};
