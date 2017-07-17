import { Component, Input, OnInit    } from "@angular/core";

import { ShareDataService } from "./shareData.service";
@Component({
    selector: 'home-list',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home.css']
})
export class HomeListComponent implements OnInit  {
    getmoneyctrl;
 
    constructor(
        private shareDataService: ShareDataService
    ){
        shareDataService.dataList$.subscribe( list => this.listdata(list))
    }
    ngOnInit  (): void{
       
    }
    //订阅事件的接受函数
    private listdata(list): void{
        this.getmoneyctrl = list
        console.log( list )
    }
}