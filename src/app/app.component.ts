import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonProjetCC';
  constructor() { const firebaseConfig = {
    apiKey: 'AIzaSyDO-XlI6eCYALPVGqyYxPatADddZiFXkcc',
    authDomain: 'monprojetcc.firebaseapp.com',
    projectId: 'monprojetcc',
    storageBucket: 'monprojetcc.appspot.com',
    messagingSenderId: '1000310238156',
    appId: '1:1000310238156:web:3c9af3f539c74e76744b69',
    measurementId: 'G-4E56JYLTRM'
  };
    // Initialize Firebase
                  firebase.initializeApp(firebaseConfig);
                  firebase.analytics();
  }
}
