

const oauth2Reducer = (state = {
    history: {},
    token: {}, user: {name: "کاربر مهمان"}
}, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.token};
        case 'SET_USER':
            return {...state, user: action.user};
        case "SET_HISTORY":
            return {...state, history: action.history};
        default:
            return state;
    }
};
export default oauth2Reducer;

