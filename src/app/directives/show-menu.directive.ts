import { Directive, Renderer, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Router, NavigationStart } from '@angular/router';

@Directive({
    selector: '[showMenu]'
})
export class ShowMenuDirective implements OnInit {
    route: any;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/") {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
                console.log("navigatonstart")
                console.log(v.url);
            }
        });
    }
}