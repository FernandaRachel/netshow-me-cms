import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormBuilder, Validators } from "../../../../node_modules/@angular/forms";
import { Router } from "../../../../node_modules/@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
    templateUrl: './cadastro.component.html'

})
export class CadastroComponent implements OnInit{
    
    cadastroForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private fire: AngularFireAuth
    ){

    }
    
    ngOnInit(): void {
        this.cadastroForm = this.formBuilder.group({
            email:['', Validators.required],
            senha:['', Validators.required]
        });
    }    

    criarUsuario(){
        var email = this.cadastroForm.get('email').value;

        var senha = this.cadastroForm.get('senha').value;

        this.fire.auth.createUserWithEmailAndPassword(email,senha);
    }
 
    redirect(){
        this.router.navigateByUrl('');
        
    }

}