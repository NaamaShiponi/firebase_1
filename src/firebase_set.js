import * as firebase from 'firebase';
import React from 'react';

 var firebaseConfig = {
    apiKey: "AIzaSyD08CBH_F3f7xTuIObyZwVdFMXQ02k8xMQ",
    authDomain: "aliexpress-39c2b.firebaseapp.com",
    databaseURL: "https://aliexpress-39c2b.firebaseio.com",
    projectId: "aliexpress-39c2b",
    storageBucket: "",
    messagingSenderId: "452735412674",
    appId: "1:452735412674:web:f7258de604831c46334e5b"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
    firebase.app()[0];