import { Component, OnInit, Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { UsersService } from "../users.service";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";

import { AngularFireStorage } from "../../../../node_modules/angularfire2/storage";

@Component({
    templateUrl: './users-information.component.html'

})
export class UsersInformationComponent implements OnInit{  

    informationForm: FormGroup;
    photoForm: FormGroup;
    file: File;
    showfoto: string;
    id: string;
    name: string;
    email: string;
    password: string;
    nameChannel: string;
    photoUrl: any;
    data: string[];

    constructor(
        private firebaseAuth: AngularFireAuth,
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private store: AngularFirestore,
        private storage: AngularFireStorage,
        private users: UsersService,
        private router: Router
    ){

    }
    
    ngOnInit(): void {
        this.userInit();

        this.photoForm = this.formBuilder.group({        

            file:['',Validators.required],
            carregaFoto: false,

        });

        this.informationForm = this.formBuilder.group({ 

            nameChannel:[this.nameChannel, Validators.required],
            name:[this.name, Validators.required],
            email:[this.email, Validators.required],
            password:[this.password, Validators.required]

        });
    }   

    userInit(){
        this.firebaseAuth.auth.onAuthStateChanged(firebaseUser =>{
            if(firebaseUser){         
                const user = this.users.userInfo();
                this.id = user.uid;
                this.email = user.email;

                const docRef = this.store.firestore.collection("users")
                .doc(this.id);

                let observable = docRef.get();
                console.log(observable);
                observable.then(doc => {
                    const data = doc.data();
                    this.email = data.email;
                    console.log(this.email);
                    this.name = data.name;
                    this.email = data.email;
                    this.password = data.password;
                    this.nameChannel = data.nameChannel;
                    this.photoUrl= data.photoUrl;
                })
        }else{

            }
        });
}


    upload(){
       
        console.log(this.file);

        this.users.upload(this.file);

         this.show();
    }

    show(){
        var fileUpload = this.storage.storage.ref('images/users/' + this.file.name);
        
        var user = this.firebaseAuth.auth.currentUser;
        
       
         let result = fileUpload.getDownloadURL();
         console.log(result);
         result.then(url =>{
             const ptURL = url;           
             
          console.log(ptURL);

          this.photoUrl = ptURL;
        
        });   
                
    }
}