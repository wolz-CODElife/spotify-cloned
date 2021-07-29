
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = new URL("https://spotify-clone-c6e51.web.app")
// const redirectUri = new URL("http://localhost:3000")
const clientId = "598ea9e68d3d40e3ab14d055cfb931cd"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}
getTokenFromUrl()

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

