import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTgLEnClTkugxRvhKwBifsomSbtdoVoTY",
  authDomain: "onelawletterfromhumanity.firebaseapp.com",
  databaseURL: "https://onelawletterfromhumanity.firebaseio.com",
  projectId: "onelawletterfromhumanity",
  storageBucket: "onelawletterfromhumanity.appspot.com",
  messagingSenderId: "216563285332"
};

let firestore;

if (!firebase.apps.length) {
  firestore = firebase.initializeApp(config);
}

export default firestore;
