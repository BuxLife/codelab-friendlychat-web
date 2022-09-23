/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCf304d5bbN6uUFtv-F3RT2t95T7eOeKB0",
  authDomain: "friendlychat-22e0e.firebaseapp.com",
  projectId: "friendlychat-22e0e",
  storageBucket: "friendlychat-22e0e.appspot.com",
  messagingSenderId: "146119044590",
  appId: "1:146119044590:web:c94bda8e3e226334b8f2ff",
  measurementId: "G-TV86D0YLN4"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}