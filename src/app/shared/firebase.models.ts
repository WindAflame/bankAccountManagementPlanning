import * as firebase from 'firebase';

export class Firebase {

    /**
     * Config of Firebase
     */
    private cfg = {
        apiKey: "AIzaSyC2uz0gkNWajVS_zmQH5fEgG5JRe5o1bSI",
        authDomain: "httpclientdemo-22a68.firebaseapp.com",
        databaseURL: "https://httpclientdemo-22a68.firebaseio.com",
        projectId: "httpclientdemo-22a68",
        storageBucket: "httpclientdemo-22a68.appspot.com",
        messagingSenderId: "427216420458"
    };

    /**
     * Instance of Firebase
     */
    private firebase;

    constructor(){
        this.firebase = firebase.initializeApp(this.cfg);
    }

    public get (){ return this.firebase } 
}

