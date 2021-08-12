import { getUsers } from "../api"
import { SET_ERROR, SET_LOADING, SET_USERS } from "./types"

export const setUsers = async (dispatch) => {
    setLoading(dispatch);
    const res = await getUsers();

    if (res.success) {
        const action = { type: SET_USERS, payload: res.data }
        dispatch(action);
    } else {
        setError(dispatch);
    }
}

export const setLoading = (dispatch) => {
    dispatch({ type: SET_LOADING })
}

export const setError = (dispatch) => {
    dispatch({ type: SET_ERROR })
}