import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { ScriptService } from './services/script.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'motogo';
  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler
  ){}
  ngOnInit(): void {
     this.script.load(  
      // 'modernizr', 
      // 'jquery', 
      // 'jquery-migrate', 
      // 'bootstrap.bundle', 
      // 'swiper-bundle', 
      // 'fancybox', 
      // 'jquery.nice-select', 
       'popper', 
       'bootstrap', 
       'cookie', 
       'swiper', 
       'nouislider', 
      'main'
    ).then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
     
    // this.bikersScript.getUserLocation();
    
  }
}
