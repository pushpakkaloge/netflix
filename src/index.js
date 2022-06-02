import React,{Fragment} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { FirebaseContext } from './context/firebase';
import {GlobalStyles} from './global-styles';
import { firebase } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase}}>
    <GlobalStyles/>
    <App />
</FirebaseContext.Provider>
);

