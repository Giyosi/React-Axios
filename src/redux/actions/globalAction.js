import { dispatch } from "../store"
import { SET_ERROR, SET_LOADING, TOGGLE_SIDEBAR } from "../types"

export const setLoading = async (value= true) => {
    dispatch({ type: SET_LOADING, payload:value })
}

export const setError = async (value= true) => {
    dispatch({ type: SET_ERROR, payload:value })
}

export const toggleSidebar = async (value= true) => {
    dispatch({ type: TOGGLE_SIDEBAR})
}