import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IosPickerComponent } from './ios-picker.component';


const routes: Routes = [
  {path:'', component:IosPickerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IosPickerRoutingModule { }
