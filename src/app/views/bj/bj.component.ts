import { Component } from "@angular/core";

//导入服务
import { GetDataService } from "../../service/getData.service";


@Component({
    selector: 'my-bj',
    templateUrl: './bj.component.html',
    styleUrls: ['./bj.css']
})
export class BjComponent{
    title 
    results: any;
    getcategory = [];
    constructor(
        private getDataService: GetDataService
    ){}
    ngOnInit() : void {
       //var self = this;
      
       this.getDataService
            .getcategorytitle()
            .then( results => {this.results = results})
    }
    //注册点击事件
    onClick(titleid) {
        //console.log(event.target.titleid);
      this.getDataService
            .getcategory(titleid)
            .then( results => { this.getcategory[titleid] = results;console.log(this.getcategory) }  )
    }

}

