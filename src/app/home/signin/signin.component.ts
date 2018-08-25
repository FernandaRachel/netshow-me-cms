import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
    templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit{
    
    signInForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router
    ){
    }
    
    ngOnInit(): void {
        this.signInForm = this.formBuilder.group({
            email:['', Validators.required],
            password:['', Validators.required]
        });
    } 

    signIn(){
        const email = this.signInForm.get('email').value;

        const password = this.signInForm.get('password').value;

        this.auth.signIn(email,password).then(value => {
            this.router.navigateByUrl('iniciarTransmissao');
            location.reload();
          })
          .catch(err => {
            alert(err.message);
          });
    }
}