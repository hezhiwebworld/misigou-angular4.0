
## 基于angular4.0分页组件

### 分页组件一般只某个页面的一小部分，所以我们它是子组件

- 当然如果你承认这话的，可以往下看，因为我把他当作子组建来写了

### 分页组件的模版

```js
import { Component } from '@angular/core';
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
    styleUrls: ['./page.css']    //css样式就是bootstrap的那个
})
export class  PageComponent {}
```

###   在组件中生成 pageList = []; 模拟数据 

```js
    //数据结构如下
    pageList = [
        {
            pageid: number  = 1
        }
         {
            pageid: number  = 2
        }
    ]

```

```js
    //生成pageList的数组
    getPageList () {
        
        //console.log(this.pageParams)
        let total = 150;
        let size  = 10;
        let icur = this.icur;  //当前页码
        let num = Math.ceil( total / size )
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

```

###  引入 装饰器Output  时间发射器EventEmitter  钩子函数的一种状态OnInit

```js
    //如下所示
    import { Component, Output, EventEmitter, OnInit } from '@angular/core';    

```

- 此时模版的结构---就变成这个样子了

```js
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
    selector : "page",
    template :`
      //....
    `,
    styleUrls: ['./page.css']    //css样式就是bootstrap的那个
})
export class  PageComponent implements OnInit{
   //这个数据应该是一步获得的
    private pageList = [];
    private icur = 1;    //这里是私有变量
   
    //组件初始化的时候调用该函数
    ngOnInit(): void {
         this.getPageList();
     }
    //分页函数
    getPageList () {
        
       //.....
    }
   

}


```

### 此时组件的基本结构都有了，然后创建一个父组件

```js
import { Component } from '@angular/core';

import { PageComponent } from "./son.component";  //别忘记在父组建中导入了
@Component({
  selector: 'app-root',
  template: `
      <page> </page>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
```

### 至此到这一步，应该可以看到一个效果图

![图](http://www.cnblogs.com/he-zhi/gallery/image/188532.html)

### 当然，现在这种东西很明显没有什么乱用，点击向上的话，就需要将icur这个值不断的增加

- 此时就需要设计到子组件---> 父组件之间的通讯

```js
    //需要一些什么东西呢 --这个装饰器@Output h还有事件发射器EventEmitter

    //PageComponent 中导入所需要的动西
    import { Component, Output, EventEmitter, OnInit } from '@angular/core';
    
    //第二步---实例化一个发射器
    @Output() OnChange: EventEmitter<string> = new EventEmitter();
    //注册一个事件，点击的时候出发
    Tomessage(value: any){
        this.OnChange.emit( value )
        this.icur = value;
    }


    //第三步需要到父组建中帮顶OnChange
    
    //AppComponent
    import { Component } from '@angular/core';

    import { PageComponent } from "./son.component";  //别忘记在父组建中导入了
    @Component({
    selector: 'app-root',
    template: `
        <page (OnChange)="any($num)"> </page>     //这里有一$千万不能省略
    `,
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        any(num:any){
            alert(num);
        }
    }

```

### 至此所有的注意点 基本标注了，以下是分页组件的全部完整demo

> 如果你想跑起来，你需要先使用 angular的脚手架创建一个项目结构
> 基本赋值黏贴就可以了，

> 关于子组建到---父组建的通讯，感觉太简单 就没有细说
> 子组建发射 --- 父组建接受  



```js
    
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
    styleUrls: ['./page.css']    //css样式就是bootstrap的那个
})
export class  PageComponent implements OnInit{
    @Output() OnChange: EventEmitter<string> = new EventEmitter();
    
    Tomessage(value: any){
        this.OnChange.emit( value )
        this.icur = value;
    }
    
    //这个数据应该是一步获得的
    pageList = [];
    icur = 1;    //这里是全局变量
   
    
    ngOnInit(): void {
         this.getPageList();
     }
    //分页函数
    getPageList () {
        
        //console.log(this.pageParams)
        let total = 150;
        let size  = 10;
        let icur = this.icur;  //当前页码
        let num = Math.ceil( total / size )
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
   

}


```




