import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScortComponent } from './scort.component';

const routes: Routes = [{ path: '', component: ScortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScortRoutingModule { }
