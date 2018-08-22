import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../auth/auth.service";

@Component({
    templateUrl: './cadastro.component.html'

})
export class CadastroComponent implements OnInit{
    
    cadastroForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService
    ){

    }
    
    ngOnInit(): void {
        this.cadastroForm = this.formBuilder.group({
            email:['', Validators.required],
            senha:['', Validators.required]
        });
    }    

    criarUsuario(){
        const email = this.cadastroForm.get('email').value;

        const senha = this.cadastroForm.get('senha').value;

        this.auth.signup(email,senha); 
    }

}