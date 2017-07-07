
import { Directive, ElementRef, Input } from "@angular/core";


@Directive({
    selector: '[aaaa]'
})
export class TitleIdDirective {
    constructor(el: ElementRef ){
       // el.nativeElement.style.backgroundColor = 'yellow';
    }
}