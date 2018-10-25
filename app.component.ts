import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyBq5yOQSL5UNrKwTL_Sv5F6Je1oSM5K2VM",
    authDomain: "proyecto-si-44236.firebaseapp.com",
    databaseURL: "https://proyecto-si-44236.firebaseio.com",
    projectId: "proyecto-si-44236",
    storageBucket: "proyecto-si-44236.appspot.com",
    messagingSenderId: "250221589183"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  ngOnInit(){
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
