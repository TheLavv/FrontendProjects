import { UserAction, UserActionType, UserState} from "../../types/types";

const defaultState: UserState = {
    user: null,
}

const reducer = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.ADD_USER: {
            return {user: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {reducer as userReducer};