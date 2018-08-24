import { GerenciamentoCanaisComponent } from './gerenciamento-canais/gerenciamento-canais.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './shared/nav-bar.component';
import { AppRoutingModule } from './app.routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeModule } from './home/home.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IniciarTransmissaoComponent } from './iniciar-transmissao/iniciar-transmissao.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { AuthService } from './auth/auth.service';
import { ShowMenuModule } from './directives/show-menu.module';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersInformationComponent } from './users/users-information/users-information.component';
import { UsersService } from './users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    SideBarComponent,
    GerenciamentoCanaisComponent,
    IniciarTransmissaoComponent,
    UploadVideoComponent,
    UsersInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'netshow-me-cms'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ShowMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
