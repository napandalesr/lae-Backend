import firebase from "firebase";

export class conexion
{
  private firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  };

  initial=()=>{
    if (!firebase.apps.length) {
      return firebase.initializeApp(this.firebaseConfig);
    }else {
      return firebase.app();
    }
  }
}