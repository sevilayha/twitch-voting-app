import firebase from 'firebase/app';
import 'firebase/firestore';

// configure main firebase
firebase.initializeApp({
  apiKey: 'AIzaSyD-wGfg9E8hXcBDmz0z8PLhlmzXQ2AmCAI',
  authDomain: 'twitch-voting-app.firebaseapp.com',
  databaseURL: 'https://twitch-voting-app.firebaseio.com',
  projectId: 'twitch-voting-app'
});

// configure firestore
firebase.firestore().settings({
  timestampsInSnapshots: true
});

// export it
export default firebase;
