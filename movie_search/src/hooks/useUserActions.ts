import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionCreators from "../actions/user";

export const useUserActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(userActionCreators, dispatch);
}