import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isLoggin: boolean;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  isLoginScreen() {
    console.log('entrou');
    // var route = this.activatedRoute.snapshot.data;
    // console.log(route);
    // return true;
  }

}

