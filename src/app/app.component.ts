import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isLoggin: boolean;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  isLoginScreen() {
    var route = this.activatedRoute.snapshot.data;
    console.log(route);
    return true;
  }

  ngOnInit() {
    console.log('OnInit');
  }
}

