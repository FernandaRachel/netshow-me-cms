import { NgModule } from "../../../node_modules/@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "../../../node_modules/@angular/common";

@NgModule({
    declarations:[
        SignInComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ]
})
export class HomeModule{

}