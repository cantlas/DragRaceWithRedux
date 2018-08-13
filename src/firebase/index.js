import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAnBw8i-98WBJlB6Dmorb_4PJqdLbbii54",
  authDomain: "dragrace-cacbf.firebaseapp.com",
  databaseURL: "https://dragrace-cacbf.firebaseio.com",
  projectId: "dragrace-cacbf",
  storageBucket: "dragrace-cacbf.appspot.com",
  messagingSenderId: "267599193328"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
