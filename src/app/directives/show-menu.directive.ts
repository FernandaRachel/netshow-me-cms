import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Directive,
    OnChanges,
    OnInit,
    Renderer,
    ɵConsole,
} from '@angular/core';
import { ElementRef } from "@angular/core";
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Directive({
    selector: '[showMenu]'
})
export class ShowMenuDirective implements OnInit, AfterContentInit {
    route: any;
    private changes: MutationObserver;

    constructor(
        private elRef:ElementRef,
        private renderer: Renderer,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
         const observer = new MutationObserver(mutations => {
            mutations.forEach(function(mutation) {
              console.log(mutation.type);
            });   
          });
          var config = { attributes: true, childList: true, characterData: true };
      
          observer.observe(this.elRef.nativeElement, config);
          this.activatedRoute.params.subscribe (res => {
            console.log('activated')
         })    
          this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
                    console.log('display: none');
                    console.log("navigatonstart")
                    console.log(v.url);
                }
            }
        });
    }
    ngAfterViewInit() {
        console.log('INIIIIIIIIIT')
        const observer = new MutationObserver(mutations => {
          mutations.forEach(function(mutation) {
            console.log(mutation.type);
        console.log('INIIIIIIIIIT2')

          });   
        });
        var config = { attributes: true, childList: true, characterData: true };
    
        observer.observe(this.elRef.nativeElement, config);
      }

    ngOnInit() {
        this.activatedRoute.params.subscribe (res => {
            console.log('activated')
         })  
        this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
                    console.log('display: none');
                    console.log("navigatonstart")
                    console.log(v.url);
                }
            }
        });
    }


    onDomChange($event: Event): void {
         this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement.subscribe, 'display', 'none');
                    console.log('display: none');
                    console.log("navigatonstart")
                    console.log(v.url);
                }
            }
        });
        console.log("$event");
        console.log($event);
      }


    
    ngAfterContentInit(){
        this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
                    console.log('display: none');
                    console.log("ngAfterViewChecked")
                    console.log(v.url);
                }
            }
        });
    }

    ngOnChanges(){
        this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
                    console.log('display: none');
                    console.log("ngOnChanges")
                    console.log(v.url);
                }
                
            }
        });
    }

    ngOnDestroy(){
        this.router.events.subscribe(v => {
            this.route = v;
            if (v instanceof NavigationStart) {
                if (v.url == "/" || v.url == "/cadastro") {
                    this.renderer.setElementStyle(this.elRef.nativeElement, 'display', 'none');
                    console.log('display: none');
                    console.log("ngOnChanges")
                    console.log(v.url);
                }
            }
        });
    }
}