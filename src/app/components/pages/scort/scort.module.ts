import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScortRoutingModule } from './scort-routing.module';
import { ScortComponent } from './scort.component';


@NgModule({
  declarations: [
    ScortComponent
  ],
  imports: [
    CommonModule,
    ScortRoutingModule
  ]
})
export class ScortModule { }
