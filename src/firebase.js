import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC6_HhhiwGr2iWRzXOyPINaK7sfhTGN6VE",
    authDomain: "app-dev-f108a.firebaseapp.com",
    projectId: "app-dev-f108a",
    storageBucket: "app-dev-f108a.appspot.com",
    messagingSenderId: "356573852502",
    appId: "1:356573852502:web:259cc6dd5649f1e364dcf7",
    measurementId: "G-FS4C1N23L7"
})

export const auth = app.auth()
export default app

