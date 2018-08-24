import { UploadVideoComponent } from './upload-video/upload-video.component';
import { GerenciamentoCanaisComponent } from './gerenciamento-canais/gerenciamento-canais.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './home/signin/signin.component';
import { IniciarTransmissaoComponent } from './iniciar-transmissao/iniciar-transmissao.component';
import { SignUpComponent } from './home/signup/signup.component';
import { UsersInformationComponent } from './users/users-information/users-information.component';


const routes: Routes = [    
    {
        path:'',
        pathMatch: 'full',
        component: SignInComponent
    },
    {
        path:'\registrar',
        pathMatch: 'full',
        component: SignUpComponent
    },
    {
        path:'\inicio',
        pathMatch: 'full',
        component: MainPageComponent
    },
    {
        path:'\iniciarTransmissao',
        pathMatch: 'full',
        component: IniciarTransmissaoComponent
    },
    {
        path:'\iniciarTransmissao2',
        component: UploadVideoComponent
    },       
    {
        path:'\gerenciamentoCanais',
        pathMatch: 'full',
        component: GerenciamentoCanaisComponent
    },
    {
        path:'\informacoesConta',
        pathMatch: 'full',
        component: UsersInformationComponent
    },
    
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

