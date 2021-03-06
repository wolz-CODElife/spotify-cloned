export const initialState = {
    // change Token to null after developing
    // token: "BQCujwV0eMY_eiCgQmuVvGRTQyCeKQz6IXHope12w-A8KIYtvEYZp0CeeR_dcWYAjtBwHDQtDpzRz46GH49AU5Tltu9NObwN-L59yre1GUnDBfnaimVfhjeVzYsqaMrKyNvQwt8DQEdLevmRmiBIVVHrJ6EhWYG0GK18OuoSfB1uLAs03qxMXLW2",
    token: null,
    user: null,
    playlists: [],
    playlist: null,
    playing: false,
    item: null
}
const reducer = (state, action) => {
    console.log(action);
    // action -> type, payload

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        default:
            return state
    }
}
export default reducer