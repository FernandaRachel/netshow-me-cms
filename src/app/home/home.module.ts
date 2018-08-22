import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        SignInComponent,
        CadastroComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ]
})
export class HomeModule{

}