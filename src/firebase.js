import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDlbfdzJnaurbiTo6wnsFQBnRwyk1Xo5ZY",
    authDomain: "clone-c1bda.firebaseapp.com",
    databaseURL: "https://clone-c1bda.firebaseio.com",
    projectId: "clone-c1bda",
    storageBucket: "clone-c1bda.appspot.com",
    messagingSenderId: "715510096609",
    appId: "1:715510096609:web:a8f1f257e080472bd44da0"
})

// const db = firebaseApp.firestore()
const auth = firebase.auth();

export {auth};