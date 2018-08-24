import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
    templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit{
    
    signUpForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,        
        private store: AngularFirestore,
        private firebaseAuth: AngularFireAuth,
        private router: Router
    ){

    }
    
    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email:['', Validators.required],
            password:['', Validators.required]
        });
    }    

    signUp(){
        const email = this.signUpForm.get('email').value;

        const password = this.signUpForm.get('password').value;
        this.auth.signUp(email,password).then(value => {
            const id = value.user.uid;
            this.userExist(id,email,password,this.router);
          })
          .catch(err => {
            alert(err.message);
          }); 
    }

    userExist(id: string, email: string, password: string, router: Router){
        this.store.firestore.collection("users").doc(id)
        .get().then(function(doc) {
        if (doc.exists) {
            router.navigateByUrl('');
        } else {
            doc.ref.set({
                name: "",
                email: email,
                password: password,
                nameChannel:"",
                photoUrl:""
             });

             router.navigateByUrl(''); 
        }
          }).catch(function(error) {
        console.log("Error getting document:", error);
        });
      }

}