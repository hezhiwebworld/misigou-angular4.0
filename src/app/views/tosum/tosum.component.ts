
import { Component,Output,Input,DoCheck,OnInit } from "@angular/core";
import { Headers ,URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { GetDataService } from "../../service/getData.service";

let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('shopid', '0');
    urlSearchParams.set('areaid', '0');
let options:RequestOptionsArgs = {
    search: urlSearchParams
};


@Component({
    templateUrl: './tosum.component.html',
    styleUrls: ['./tosum.css'] 
})
export class TosumComponent  {
    //向子组件通讯
    @Input() title = "凑单品";
    private shopInit = '京东';
    private areaInit = '华东';
    private shopshow: boolean = true;
    private areashow: boolean = true;
    private shopList;
    private areaList;
    private productList;
    constructor(
        private getDataservice: GetDataService,
    ){}
   
    ngOnInit(): void {
         this.getDataservice.getgsshop()
            .then( results => {console.log( results );this.shopList = results})
         this.getDataservice.getgsshoparea()
            .then( results => {console.log( results );this.areaList = results})
        //渲染数据
         this.getDataservice.getgsproduct( options )
         .then(results => {console.log( results ) ;this.productList = results} )
    }
    getshopid ( Prams , name ){
        urlSearchParams.set('shopid', Prams);
        this.getDataservice.getgsproduct( options )
        .then(results => this.productList = results )
        //class 的显示状态
         this.shopshow = true
         this.areashow = true;
        //更改显示项
        this.shopInit = name
    }
    getareaid(Prams,name){
         urlSearchParams.set('areaid', Prams);
          this.getDataservice.getgsproduct( options )
         .then(results => this.productList = results )
          //class 的显示状态
          this.areashow = true;
          this.shopshow = true;
          //更改显示项
          this.areaInit = name;
          console.log(name)
    }
    checkOut(){
       //class 的显示状态
       this.shopshow = this.shopshow ? false : true
    }
    checkoutArea(){
        //class 的显示状态
        this.areashow = this.areashow ? false : true
    }
}