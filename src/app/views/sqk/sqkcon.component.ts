import { Component, Input , OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Headers ,URLSearchParams, RequestOptionsArgs } from '@angular/http';

import { GetDataService } from "../../service/getData.service";





@Component({
    templateUrl: './sqkcon.component.html'
})
export class SqkconComponent implements OnInit {
  options;
  productid: string;
  //private options ;
  private results;
  //在构造函数中注入服务
  constructor(
    //route 是  ActivatedRoute  服务的私有属性
      private route: ActivatedRoute,
      private getDataService : GetDataService
  ){
     this.route.params.subscribe(param => {
          this.productid = param['productid'];
          //console.log( this.productid );
      })
      
  }
  



  //组件初始化的时候 
   ngOnInit(): void {
       console.log( this.productid );
    
     let urlSearchParams = new URLSearchParams();
        urlSearchParams.set( 'productid' ,  this.productid  );
     let options: RequestOptionsArgs = {
            search: urlSearchParams
        }
      this.getDataService.getmoneyctrlproduct( options )
            .then(results => this.results = results)
   }
}