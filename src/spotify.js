export const authEndPoint = "https://accounts.spotify.com/en/authorize?";
const redirectUri = "http://localhost:3000/";
// const redirectUri = "https://ml4kb.csb.app/";
const clientId = "b5f5689e2f22473e8d2b27234df98592";
// const redirectUri = "https://8g4wf.csb.app/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

// get token from url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var arr = item.split("=");
      initial[arr[0]] = decodeURIComponent(arr[1]);
      return initial;
    }, {});
};

// export const loginUrl = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
// 	"%20"
// )}&response_type=token&show_dialog=true`;

export const loginUrl = `${authEndPoint}response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true)`;
