import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isLoggin: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth : AuthService
    ) {

  }

  isLoginScreen() {
    console.log('entrou');
    // var route = this.activatedRoute.snapshot.data;
    // console.log(route);
    // return true;
  }

   sair(){
     this.auth.logout();
   }

}

