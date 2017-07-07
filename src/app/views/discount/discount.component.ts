import { Component } from "@angular/core";

import { GetDataService } from "../../service/getData.service";

@Component({
    templateUrl: './discount.component.html',
    styleUrls:  ['./discount.css']
})
export class DiscountComponent{
    results;
    constructor(
        private getDataService : GetDataService
    ){}
    ngOnInit(): void {
       this.getDataService.getcoupon()
            .then(results => this.results = results)
    }
}