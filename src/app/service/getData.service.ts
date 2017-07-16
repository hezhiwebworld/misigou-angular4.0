
import { Injectable } from '@angular/core';

import { Headers, Http ,URLSearchParams, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const baseurl = "http://127.0.0.1:9090/api/";

let params = new URLSearchParams();

//这是一个服务装饰器跟下面的类不能有空格
@Injectable()
export class GetDataService {
      //首页
      private getindexmenuUrl =  baseurl + 'getindexmenu';
      private getmoneyctrlhomeUrl =  baseurl +  'getmoneyctrl'
     // private getmoneyctrlUrl = baseurl +  'getmoneyctrl';
      //比价
      private getcategorytitleUrl = baseurl + 'getcategorytitle';
      private getcategoryUrl = baseurl + 'getcategory';
      private getproductlistUrl = baseurl+ 'getproductlist';
      private getproductUrl = baseurl+ 'getproduct';
      //省钱
      private getmoneyctrlUrl = baseurl+ 'getmoneyctrl';
      private getmoneyctrlproductUrl = baseurl+ 'getmoneyctrlproduct';
      
      //国内折扣
      private getinlanddiscountUrl = baseurl+ 'getinlanddiscount';
      //白菜价
      private getbaicaijiatitletUrl = baseurl+ 'getbaicaijiatitle';
      private getbaicaijiaproductUrl = baseurl+ 'getbaicaijiaproduct';
       //优惠卷
      private getcoupontUrl = baseurl+ 'getcoupon';
       //凑单品
      private getgsshopUrl = baseurl+ 'getgsshop';
      private getgsshopareaUrl = baseurl+ 'getgsshoparea';
      private getgsproductUrl:string = baseurl+ 'getgsproduct';

      constructor(
        private http: Http
      ){};
      //首页菜单
      getindexmenu(): Promise<any[]> {
        return this.http.get(this.getindexmenuUrl)
                .toPromise()
                //console.log(response.json());
                .then(response => { return response.json().result as any[] })
                .catch(this.handleError);
      };
      getmoneyctrlhome(pageid):Promise<any[]>{
        return this.http.get(this.getmoneyctrlhomeUrl+'?pageid='+ pageid )
                .toPromise()
                .then(response => {return response.json().result as any[] })
      }
      //比价列表数据
      getcategorytitle(): Promise<any[]> {
        return this.http.get(this.getcategorytitleUrl)
                .toPromise()
                //console.log(response.json());
                .then(response => {console.log(response.json()); return response.json().result as any[] })
                .catch(this.handleError);
      };
      //比价商品列表
      getcategory(titleid: number): Promise<any[]> {
        return this.http.get(this.getcategoryUrl + '?titleid=' + titleid )
                .toPromise()
                .then(response => {console.log(response.json()); return response.json().result as any[] } )
      }
      //比较商品列表
      getproductlist(): Promise<any[]> {
        return this.http.get( this.getproductlistUrl)
                .toPromise()
                .then( response => { return response.json() as any [] } )
      }
      //省钱空
      getmoneyctrl():Promise<any[]> {
        return this.http.get( this.getmoneyctrlUrl)
                  .toPromise()
                  .then( response => {return response.json() as any [] })
      }
      getmoneyctrlproduct( options ): Promise<any[]> {
        console.log(options)
        return this.http.get( this.getmoneyctrlproductUrl ,options )
                  .toPromise()
                  .then( response =>response.json() as any [])
      }
      //国内折扣列表
      getinlanddiscount(): Promise<any[]> {
          return this.http.get(this.getinlanddiscountUrl)
                      .toPromise()
                      .then(response =>{ return response.json().result as any []})
      }
      //白菜价列表
      getbaicaijiatitle(): Promise<any[]> {
        return this.http.get(this.getbaicaijiatitletUrl)
                    .toPromise()
                    .then( response => { return response.json() as any [] })
      }
      //默认参数--白菜价泪飙列表
      getbaicaijiaproduct( titleid = 0): Promise<any[]> {
        return this.http.get( this.getbaicaijiaproductUrl + '?titleid=' + titleid )
                    .toPromise()
                    .then( response => { return response.json() as any [] })
      }
      //优惠卷
      getcoupon(): Promise<any [] >{
        return this.http.get(this.getcoupontUrl)
                    .toPromise()
                    .then( response =>response.json() )
      }
      //凑单品
      getgsshop(): Promise<any []> {
          return this.http.get(this.getgsshopUrl)
                    .toPromise()
                    .then( response =>response.json() )
      }
      getgsshoparea(): Promise<any []> {
          return this.http.get(this.getgsshopareaUrl)
                    .toPromise()
                    .then( response =>response.json() )
      }
      getgsproduct(options): Promise<any []> {
         // console.log(options)
          return this.http.get(this.getgsproductUrl, options )
                    .toPromise()
                    .then( response =>{return  response.json() ; } )
      }

     //异常处理函数
     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }
}
