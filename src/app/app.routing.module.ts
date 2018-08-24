import { UploadVideoComponent } from './upload-video/upload-video.component';
import { GerenciamentoCanaisComponent } from './gerenciamento-canais/gerenciamento-canais.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './home/signin/signin.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { IniciarTransmissaoComponent } from './iniciar-transmissao/iniciar-transmissao.component';
import { AnalyticsComponent } from './analytics/analytics.component';


const routes: Routes = [
    {
        path:'\analytics',
        component: AnalyticsComponent
    },
    {
        path:'\iniciarTransmissao2',
        component: UploadVideoComponent
    },
    {
        path:'\iniciarTransmissao',
        pathMatch: 'full',
        component: IniciarTransmissaoComponent
    },
    {
        path:'\gerenciamentoCanais',
        pathMatch: 'full',
        component: GerenciamentoCanaisComponent
    },
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

