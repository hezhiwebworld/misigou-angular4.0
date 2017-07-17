import { Component, OnInit } from '@angular/core';

import { ShareDataService } from "../../views/home/shareData.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  num = 0;
  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
     this.add( 0 )
  }
  add(pageid){
    console.log( pageid )
    this.num = pageid
    //触发event服务
    this.shareDataService.add(pageid)
  }
}
