import store from "../store";

export const showLoading = async (content, color) => {
    if (content != null && color != null) {
        await store.dispatch({type: "SHOW_LOADING", content, color});
    } else if (content != null) {
        await store.dispatch({type: "SHOW_LOADING", content, color: "#ffffff"});
    } else if (color != null) {
        await store.dispatch({type: "SHOW_LOADING", content: "درحال بارگزاری...", color});
    } else {
        await store.dispatch({type: "SHOW_LOADING", content: "درحال بارگزاری...", color: "#ffffff"});
    }
};
export const hideLoading = async () => {
    await store.dispatch({type: "HIDE_LOADING"});
};
