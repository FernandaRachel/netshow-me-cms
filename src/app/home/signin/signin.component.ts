import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormBuilder, Validators } from "../../../../node_modules/@angular/forms";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ){

    }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName:['', Validators.required],
            password:['', Validators.required]
        });
    }

    redirect(){
        this.router.navigateByUrl('main');
        
    }

}