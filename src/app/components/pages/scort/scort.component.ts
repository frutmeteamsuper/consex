import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
@Component({
  selector: 'app-scort',
  templateUrl: './scort.component.html',
  styleUrls: ['./scort.component.css']
})
export class ScortComponent implements AfterViewInit {

  constructor(
    public script:ScriptService,
    ) { }

ngAfterViewInit(): void {
       this.script.load(  
      // 'modernizr', 
      'jquery', 
      // 'jquery-migrate', 
      // 'bootstrap.bundle', 
      // 'swiper-bundle', 
      // 'fancybox', 
      // 'jquery.nice-select', 
   
      'fslightbox',
      'main'
    ).then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
     
  }

}
