import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
//组建
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HomeListComponent } from "./views/home/home-list.component";
import { PageComponent } from "./plugins/pagetions/page.component";
import { FootComponent } from "./views/foot/foot.component";
import { HeadComponent } from "./views/head/head.component";
import { BjComponent } from "./views/bj/bj.component";
import { BjListComponent } from "./views/bj/bjlist.component";
import { GnzkComponet } from "./views/gnzk/gnzk.component";
import { SqkComponet } from "./views/sqk/sqk.component";
import { SqkconComponent } from "./views/sqk/sqkcon.component";
import { BcjComponent } from "./views/bcj/bcj.component";
import { DiscountComponent } from "./views/discount/discount.component";
import { TosumComponent } from "./views/tosum/tosum.component";
//服务
import { ResultService } from "./views/home/result.service";
import { GetDataService } from "./service/getData.service";
import { ShareDataService } from "./views/home/shareData.service";
//指令
//import { TitleIdDirective } from "./views/bj/titleid.directive";


import {  AppRoutingModule } from "./app-routing.module";
import { ButtonDirective } from './plugins/directive/button.directive';
import { AddnumDirective } from './plugins/addnum.directive';
import { AddComponent } from './plugins/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    FootComponent,
    HeadComponent,
    BjComponent,
    BjListComponent,
    GnzkComponet,
    SqkComponet,
    BcjComponent,
    DiscountComponent,
    TosumComponent,
    ButtonDirective,
    SqkconComponent,
    HomeListComponent,
    AddnumDirective,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ResultService,GetDataService,ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
