import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './home/signin/signin.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';


const routes: Routes = [
    {
        path:'\main',
        pathMatch: 'full',
        component: MainPageComponent
    },
    {
        path:'',
        pathMatch: 'full',
        component: SignInComponent
    },
    {
        path:'\cadastro',
        pathMatch: 'full',
        component: CadastroComponent
    }
    
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

