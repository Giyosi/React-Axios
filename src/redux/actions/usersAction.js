import { getUsersById, getUsers, getTodos } from "../../api";
import { dispatch } from "../store";
import { SET_TODOS, SET_USER, SET_USERS } from "../types";
import { setError, setLoading } from "./globalAction";

export const setUsers = async () => {
    setLoading(true);
    const res = await getUsers();
    setLoading(false);

    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    } else {
        setError(true);
    }
};


export const setUser = async (id) => {
    setLoading(true);
    const res = await getUsersById(id);
    setLoading(false);

    if (res.success) {
        const action = { type: SET_USER, payload: res.data };
        dispatch(action);
    } else {
        setError(true);
    }
};

export const setTodos = async () => {
    setLoading(true);
    const res = await getTodos();
    setLoading(false);

    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
    } else {
        setError(true);
    }
};