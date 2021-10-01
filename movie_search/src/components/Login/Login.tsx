import React, {useContext} from 'react'
import './Login.css'
import {useHistory} from "react-router";
import {Context} from "../../index";
import firebase from "firebase/compat";
import {useUserActions} from "../../hooks/useUserActions";
import {Redirect} from "react-router-dom";

export const Login: React.FC = () => {
    const history = useHistory();
    const {auth} = useContext(Context);
    const {addUser} = useUserActions();

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        addUser(user);
        localStorage.setItem('user', JSON.stringify(user?.uid));
    }

    const handleClick = () => {
        login()
            .then(() => history.push('/'))
            .catch(error => alert(error));
    }

    if (localStorage.getItem('user'))
        return (<Redirect exact to='/' />)

    return (
        <div className="wrapper">
            <div className="content">
                <button className="login-btn" onClick={handleClick}>
                    Login
                </button>
            </div>
        </div>
    )
}