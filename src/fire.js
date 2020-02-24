import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBTLKO1tS8xeVeox0R1UthXT2mtIPE19f4",
    authDomain: "testfirebasesecond.firebaseapp.com",
    databaseURL: "https://testfirebasesecond.firebaseio.com",
    projectId: "testfirebasesecond",
    storageBucket: "testfirebasesecond.appspot.com",
    messagingSenderId: "86653327534",
    appId: "1:86653327534:web:23da4eae370112446bb53f",
    measurementId: "G-0DDW8C9274"
};

const fire=firebase.initializeApp(firebaseConfig);


export default fire;