import {Dispatch} from "redux";
import {UserAction, UserActionType} from "../types/types";

export const addUser = (user: any) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.ADD_USER,
            payload: user
        })
    }
}