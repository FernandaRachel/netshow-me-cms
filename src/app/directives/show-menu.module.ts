import { ShowMenuDirective } from './show-menu.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ShowMenuDirective],
    exports: [ShowMenuDirective],
    imports: [CommonModule]
})
export class ShowMenuModule {}