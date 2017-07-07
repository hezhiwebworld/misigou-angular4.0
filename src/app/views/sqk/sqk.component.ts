import { Component } from "@angular/core";


import { GetDataService } from "../../service/getData.service";

@Component({
    templateUrl : './sqk.component.html',
    styleUrls: ['./sqk.css']
})
export class SqkComponet {
    results;
    constructor(
         private getDataService: GetDataService,
    ){}

    //钩子函数一般在组件初始化的时候
    ngOnInit(): void {
        this.getDataService.getmoneyctrl()
            .then( results => { this.results = results ;console.log( results )} )
    }
}