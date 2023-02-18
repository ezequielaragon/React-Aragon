// import * as firebase from "firebase/app" 
// import "firebase/firestore"

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyBXRRxKmVx1lCjF3t0bYNxwerFQMStjVDU",
//     authDomain: "react-proyecto-f8d3d.firebaseapp.com",
//     projectId: "react-proyecto-f8d3d",
//     storageBucket: "react-proyecto-f8d3d.appspot.com",
//     messagingSenderId: "612046314367",
//     appId: "1:612046314367:web:69dcd71d0ff34757e6984a"

// }
// )

// export function getFirebase(){

//     return app
// }

// export function getFirestore(){
//     return firebase.firestore(app)
// }

import { initializeApp } from 'firebase/app';
import { getFirestore, collection} from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXRRxKmVx1lCjF3t0bYNxwerFQMStjVDU",
  authDomain: "react-proyecto-f8d3d.firebaseapp.com",
  projectId: "react-proyecto-f8d3d",
  storageBucket: "react-proyecto-f8d3d.appspot.com",
  messagingSenderId: "612046314367",
  appId: "1:612046314367:web:69dcd71d0ff34757e6984a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const items = collection(db, 'listaProductos')
