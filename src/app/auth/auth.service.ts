import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { User } from './user';


@Injectable()
export class AuthService {
  user: Observable<User>;

  uid : string;
  email: string;
  photoURL: string;
  displayName: string;

  constructor(
      private firebaseAuth: AngularFireAuth,
      private router: Router){

    }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigateByUrl('');
      })
      .catch(err => {
        alert(err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {

        this.userData();
        // console.log('Nice, it worked!');
        // this.router.navigateByUrl('main');
      })
      .catch(err => {
        alert(err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();

      this.userData();
  }

  userData(){

    this.firebaseAuth.auth.onAuthStateChanged(firebaseUser =>{
      if(firebaseUser){

        this.uid = firebaseUser.uid;
        this.email = firebaseUser.email;
        this.photoURL = firebaseUser.photoURL;
        this.displayName = firebaseUser.displayName;

        console.log(this.uid);
        console.log(this.email);
        console.log(this.photoURL);
        console.log(this.displayName);

        console.log('Nice, it worked!');
        this.router.navigateByUrl('iniciarTransmissao');
        location.reload();

      } else {

        console.log('Até mais!');
        this.router.navigateByUrl('');

        location.reload();

      }

    })

  }


}