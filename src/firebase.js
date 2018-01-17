import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDXFPI5OnIF-M_karJcv1oKhEd28eF7g5o",
    authDomain: "goal-coach-298f8.firebaseapp.com",
    databaseURL: "https://goal-coach-298f8.firebaseio.com",
    projectId: "goal-coach-298f8",
    storageBucket: "",
    messagingSenderId: "231195948319"
};

export const firebaseApp = firebase.initializeApp(config)