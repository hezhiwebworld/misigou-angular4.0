
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { HeadComponent } from "./views/head/head.component";
import { BjComponent } from "./views/bj/bj.component";
import { BjListComponent } from "./views/bj/bjlist.component";
import { GnzkComponet } from "./views/gnzk/gnzk.component";
import { SqkComponet } from "./views/sqk/sqk.component";
import { SqkconComponent } from "./views/sqk/sqkcon.component";
import { BcjComponent } from "./views/bcj/bcj.component";
import { DiscountComponent } from "./views/discount/discount.component";
import { TosumComponent } from "./views/tosum/tosum.component";

const routes: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'bj' , component:  BjComponent  },
    { path: 'bj' , component:  HeadComponent },
    { path: 'bj/list',component:  BjListComponent },
    { path: 'bj/list',component:  HeadComponent },
    { path: 'gnzk', component:  GnzkComponet },
    { 
        path: 'sqk', 
        component:  SqkComponet ,
        // children: [{
        //     path: 'sqkcon/:productid',
        //     component: SqkconComponent,
        // }]
    },
    //这里不能用子路由因为，下个页面只需要组件SqkconComponent
    { path: 'sqkcon/:productid', component:  SqkconComponent },
    { path: 'bcj', component:  BcjComponent },
    { path: 'discount', component:  DiscountComponent },
    { path: 'tosum', component:  TosumComponent },
]

@NgModule({
    imports:  [ RouterModule.forRoot(routes) ],
    exports:  [ RouterModule ]
})
export class AppRoutingModule {}