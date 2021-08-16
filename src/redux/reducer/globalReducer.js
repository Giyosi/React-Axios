import { SET_ERROR, SET_LOADING, TOGGLE_SIDEBAR, } from "../types";

const initialState = {
    sidebarIsShow: true,
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING: return { ...state, loading: action.payload }
        case SET_ERROR: return { ...state, error: action.payload }
        case TOGGLE_SIDEBAR: return { ...state, sidebarIsShow: !state.sidebarIsShow }

        default: return state;
    }

}

export default reducer;