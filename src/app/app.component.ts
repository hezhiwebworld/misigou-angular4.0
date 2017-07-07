import { Component } from '@angular/core';

import { HomeComponent } from './views/home/home.component';

@Component({
  selector: 'app-root',
  template: `
  	 <router-outlet></router-outlet>
	
  `
})
export class AppComponent {
  
}




//rem
(function(doc,win){
	var docE = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientionchange' : 'resize',
		recalc = function(){
			var cW = docE.clientWidth;
			if(!cW){
				return;
			}
			docE.style.fontSize = 20 * (cW / 320 ) + 'px';
		}
	if(!doc.addEventListener){
		return;
	}else{
		win.addEventListener( resizeEvt , recalc ,false);
		doc.addEventListener( 'DOMContentLoaded' , recalc , false )
	}
	
})(document,window)