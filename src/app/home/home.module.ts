import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ]
})
export class HomeModule{

}