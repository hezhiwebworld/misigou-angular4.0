import { Component } from "@angular/core";


import { GetDataService } from "../../service/getData.service";

@Component({
    templateUrl : './gnzk.component.html',
    styleUrls: ['./gnzk.css']
})
export class GnzkComponet {
    results;
    constructor(
         private getDataService: GetDataService,
    ){}

    //钩子函数一般在组件初始化的时候
    ngOnInit(): void {
        this.getDataService.getinlanddiscount()
            .then( results => { this.results = results} )
    }
}