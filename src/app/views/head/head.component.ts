import { Component,Input } from "@angular/core";



@Component({
    selector: 'my-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.css']
})
export class HeadComponent{
    @Input()title: string ;
    ngOnInit() : void {
        console.log(222)
        
    }
}

