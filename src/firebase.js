import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB5MTs4UQBgjwUoG8TiqyJ-dho_m70eOv8",
    authDomain: "fir-email-login-6d853.firebaseapp.com",
    projectId: "fir-email-login-6d853",
    storageBucket: "fir-email-login-6d853.appspot.com",
    messagingSenderId: "638837146822",
    appId: "1:638837146822:web:b3fb0bbf797a736302c3c7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export { auth }
export default db