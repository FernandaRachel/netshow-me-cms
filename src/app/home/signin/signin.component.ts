import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormBuilder, Validators } from "../../../../node_modules/@angular/forms";
import { Router } from "../../../../node_modules/@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { resolveDirective } from "../../../../node_modules/@angular/core/src/render3/instructions";
import { FirebaseAuth } from "../../../../node_modules/angularfire2";
import { AuthService } from "../../auth/auth.service";


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    userValido;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService
    ){

    }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email:['', Validators.required],
            senha:['', Validators.required]
        });
    }    

    autenticar(){
        const email = this.loginForm.get('email').value;

        const senha = this.loginForm.get('senha').value;

        this.auth.login(email,senha); 
        
    } 

}