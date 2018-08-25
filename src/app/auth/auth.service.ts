import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import { AngularFireStorage } from 'angularfire2/storage';
import { Users } from '../users/users';


@Injectable()
export class AuthService {
  user: Observable<Users>;

  uid : string;
  email: string;
  photoURL: string;
  displayName: string;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private store: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router){
    }
    
  signIn(email: string, password: string) {
    return this.firebaseAuth
      .auth.signInWithEmailAndPassword(email, password);
    }

  signUp(email: string, password: string) {
    return this.firebaseAuth
      .auth.createUserWithEmailAndPassword(email, password);
    }
    
  logout() {
    this.firebaseAuth
      .auth.signOut();
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