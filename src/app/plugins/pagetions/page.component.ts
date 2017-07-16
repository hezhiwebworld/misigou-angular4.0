
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

//导入异步的服务
import { ResultService } from "./../../views/home/result.service";

@Component({
    selector : "page",
    template :`
       <div class="page ellipsis">
                <ul class="pagination" *ngIf="pageList">
                <li><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li> 
                <li *ngFor="let list of pageList"><a href="#">{{ list.pageid }}</a></li>
                <li (click)="Tomessage( icur+1 )"><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
        </div>
    `,
    styleUrls: ['./page.css']
})
export class  PageComponent implements OnInit{
    @Output() OnChange: EventEmitter<string> = new EventEmitter();
    
    Tomessage(value: any){
        this.OnChange.emit( value )
        this.icur = value;
        //这里数据发生改变---在这里重新渲染分页组件
        this.getPageList(this.icur)
    }
    
    //这个数据应该是一步获得的
    
    
    constructor (
         private resultService: ResultService
    ){}
    pageList = [];
     icur = 1;    //这里是全局变量
    pageParams ;
    
    ngOnInit(): void {
        //上品列表
        this.resultService
        .getmoneyctrl()
        .then( results => { this.pageParams = results })
         //分页
         .then( ()=>{
             this.getPageList(this.icur);
            
         })
         
    }
    
    //分页函数
    getPageList (currenticur) {
        if(!this.pageParams){
            return;
        }
        //console.log(this.pageParams)
        let total = this.pageParams.totalCount;
        let size  = this.pageParams.pagesize;
        let icur = currenticur;
        let num = Math.ceil( total / size )
        console.log(icur)
        for ( var i = 0 ; i< num ;i++ ) {
            if(num <= 5){
                this.pageList.push({
                    pageid  : i+1,
                    pageicur :icur
                })
            }else if( num - icur < 5 && icur > 4){
                this.pageList = [
                        {
                         pageid: icur - 4,
                         pageicur :icur
                        }, {
                         pageid: icur - 3,
                         pageicur :icur
                        }, {
                         pageid: icur - 2,
                         pageicur :icur
                        }, {
                         pageid: icur - 1,
                         pageicur :icur
                        }, {
                         pageid: icur,
                         pageicur :icur
                        }
                    ];
            }else{
                let cur = Math.floor((icur - 1) / 5) * 5 + 1
                this.pageList = [
                         {
                         pageid: cur ,
                         pageicur :icur
                        }, {
                         pageid: cur + 1,
                         pageicur :icur
                        }, {
                         pageid: cur + 2,
                         pageicur :icur
                        }, {
                         pageid: cur + 3,
                         pageicur :icur
                        }, {
                         pageid: cur + 4,
                         pageicur :icur
                        }
                ]
            }
        }
       
    }
    //点击更改当前值

}

