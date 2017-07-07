import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
//组建
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
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
//指令
//import { TitleIdDirective } from "./views/bj/titleid.directive";


import {  AppRoutingModule } from "./app-routing.module";
import { ButtonDirective } from './plugins/directive/button.directive';

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
    SqkconComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ResultService,GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }