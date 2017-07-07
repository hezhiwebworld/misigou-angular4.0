
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Result } from './../../homelogo';

const baseurl = "http://127.0.0.1:9090/api/";

//这是一个服务装饰器跟下面的类不能有空格
@Injectable()
export class ResultService {
      private getindexmenuUrl =  baseurl+ 'getindexmenu';  
      private getmoneyctrlUrl = baseurl+  'getmoneyctrl';
      constructor(private http: Http) { };
     getindexmenu(): Promise<any[]> {
        return this.http.get(this.getindexmenuUrl)
                .toPromise()
                //console.log(response.json());
                .then(response => { return response.json().result as any[] })
                .catch(this.handleError);
     };
     getmoneyctrl(): Promise<any[]> {
        return this.http.get(this.getmoneyctrlUrl)
                .toPromise()
                .then(response => { return response.json() as any[]})
                .catch(this.handleError);
     }

     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }
}
