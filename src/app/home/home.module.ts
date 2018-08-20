import { NgModule } from "../../../node_modules/@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "../../../node_modules/@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { RouterModule } from "../../../node_modules/@angular/router";

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