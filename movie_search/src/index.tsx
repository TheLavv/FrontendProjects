import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWZxj7oKY7JikN2XiYKl3uxBsLG9fXa3I",
    authDomain: "movie-react-235fb.firebaseapp.com",
    projectId: "movie-react-235fb",
    storageBucket: "movie-react-235fb.appspot.com",
    messagingSenderId: "933630337933",
    appId: "1:933630337933:web:2097c19ef8c01b68c6d3c4",
    measurementId: "G-3J0XMJVVWL"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext<any>(null)

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>
        <Provider store={store}>
          <App />
        </Provider>
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
