import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import { AngularFireStorage } from 'angularfire2/storage';


@Injectable()

export class UsersService{

  constructor(
    private firebaseAuth: AngularFireAuth,
    private store: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router){
    }

    userInfo(){        
      const user =  this.firebaseAuth.auth.currentUser;
      return user;  

    }

          upload(dados: File){
            var fileUpload = this.storage.storage.ref('images/users/' + dados.name);
        
            var task = fileUpload.put(dados);
          }

}