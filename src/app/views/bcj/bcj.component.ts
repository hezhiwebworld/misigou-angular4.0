import { Component } from "@angular/core";

import { GetDataService } from "../../service/getData.service";

@Component({
    templateUrl: './bcj.component.html',
    styleUrls: ['./bcj.css']
})
export class BcjComponent{
    results;
    listresult;
    constructor(
        private getDataService: GetDataService
    ){}
    ngOnInit(): void{
        this.getDataService.getbaicaijiatitle()
            .then( results => { this.results = results; console.log( results  ) })
        this.getDataService.getbaicaijiaproduct()
            .then( results => { this.listresult = results; console.log( results  ) })
    }
}

