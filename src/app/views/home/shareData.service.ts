import { Injectable,EventEmitter } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

const baseurl = "http://127.0.0.1:9090/api/";

@Injectable()
export class ShareDataService{
    public dataList$;
    private getmoneyctrlUrl = baseurl+  'getmoneyctrl';
    private getmoneyList;
    constructor(
        private http: Http
    ){
        this.dataList$ = new EventEmitter()
    }
    //获取数据
    public getmoneyctrl(pageid):Promise<any[]>{
        return this.http.get(this.getmoneyctrlUrl+'?pageid='+ pageid )
                .toPromise()
                .then(response => { return response.json().result as any[] })
    }
    public add(pageid): void {
        //根据传递进去参数，获取不同的服务器的数据
        
        this.getmoneyctrl( pageid )
            .then( result => this.getmoneyList = result )
            .then(
                this.dataList$.emit( this.getmoneyList )
               // console.log(this.getmoneyList)
            )
       
        
    }
}