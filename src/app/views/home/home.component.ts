import { Component,OnInit } from '@angular/core';

import { URLSearchParams,RequestOptionsArgs } from '@angular/http';
import { ActivatedRoute, Params, Router }   from '@angular/router';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { Result } from "./../../homelogo";
import { ResultService } from "./result.service";
import { ShareDataService } from "./shareData.service";

let arr = ['bj','sqk',
		'gnzk','bcj','sqk',
		'discount','#','javascript:;','tosum',
		'#','nav','nameplate',
		]



@Component({
  selector: 'hero-detail',
  templateUrl: './home.component.html',
  styleUrls: ['./../../css/loyout.css','./../../css/common.css','./home.css'],
 
})
export class HomeComponent  implements OnInit{  
  results: any;
  getmoneyctrl: any;
  pageid = 0;
  clickid;
  constructor(
     private resultService: ResultService,
     private shareDataService: ShareDataService,
     private router: Router
    ) { 
       this.shareDataService.add(0)
    }
              
          //没有返回值
  ngOnInit(): void {
    //导航条列表
   this.resultService
        .getindexmenu()
        .then( results => {this.results = results;console.log(this.results)})
       
   }

   goOther( item: number ): void{
      console.log( arr[item] )
      //直接使用这个函数导航比较方便
      this.router.navigate([ ('/' + arr[item]) ])
   }
}








