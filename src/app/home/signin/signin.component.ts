import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormBuilder, Validators } from "../../../../node_modules/@angular/forms";
import { Router } from "../../../../node_modules/@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import firebase = require("../../../../node_modules/firebase");
import { resolveDirective } from "../../../../node_modules/@angular/core/src/render3/instructions";
import { FirebaseAuth } from "../../../../node_modules/angularfire2";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    userValido;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private fire: AngularFireAuth
    ){

    }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email:['', Validators.required],
            senha:['', Validators.required]
        });
    }    

    autenticar(){
        var email = this.loginForm.get('email').value;

        var senha = this.loginForm.get('senha').value;

        var result = this.fire.auth.signInWithEmailAndPassword(email,senha);

        return this.login(result);
        
        
    }

    login(result: Promise<auth.UserCredential>){
        console.log(this.fire.auth.currentUser.email);
        const user = this.fire.auth.currentUser;
        if(user != null){
            return this.redirect();
        }
        // this.fire.auth.onAuthStateChanged(function(user) {
        //     if (user) {
        //         console.log("deu certo");
        //         this.redirect();
        //     } else {
        //       console.log("erro");
        //     }
        //   });          
    }
 

    redirect(){
        this.router.navigateByUrl('main');
        
    }

}