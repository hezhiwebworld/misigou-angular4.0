import { Component, Input, OnInit    } from "@angular/core";

@Component({
    selector: 'home-list',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home.css']
})
export class HomeListComponent implements OnInit  {
    @Input() getmoneyctrl;
 
    constructor(
    ){}
    ngOnInit  (): void{
       console.log( this.getmoneyctrl )
     
    }
}