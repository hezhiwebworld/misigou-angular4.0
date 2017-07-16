import { Component,OnInit } from '@angular/core';

import { URLSearchParams,RequestOptionsArgs } from '@angular/http';
import { ActivatedRoute, Params, Router }   from '@angular/router';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { Result } from "./../../homelogo";
import { ResultService } from "./result.service";
import { GetDataService } from "../../service/getData.service";

let arr = ['bj','sqk',
		'gnzk','bcj','sqk',
		'discount','#','javascript:;','tosum',
		'#','nav','nameplate',
		]



@Component({
  selector: 'hero-detail',
  templateUrl: './home.component.html',
  styleUrls: ['./../../css/loyout.css','./../../css/common.css','./home.css']
})
export class HomeComponent  implements OnInit{  
  results: any;
  getmoneyctrl: any;
  pageid = 0;
  clickid;
  constructor(
     private resultService: ResultService,
     private GetDataService: GetDataService,
     private router: Router
    ) { }
              
          //没有返回值
  ngOnInit(): void {
    //导航条列表
   this.resultService
        .getindexmenu()
        .then( results => {this.results = results;console.log(this.results)})
   //商品列表
   this.GetDataService
            .getmoneyctrlhome(this.pageid)
            .then( results => {this.getmoneyctrl = results;console.log(this.getmoneyctrl)})
  }

   goOther( item: number ): void{
      console.log( arr[item] )
      //直接使用这个函数导航比较方便
      this.router.navigate([ ('/' + arr[item]) ])
   }
   //page 增加
    On (event:any): void{
        // this.icur = current;
        // this.pageParams.icur = current
        this.pageid = event
         this.GetDataService
            .getmoneyctrlhome(this.pageid)
            .then( results => {this.getmoneyctrl = results;console.log(this.getmoneyctrl)})
        console.log(this.pageid)
    }
 }








