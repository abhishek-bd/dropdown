import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IosPickerRoutingModule } from './ios-picker-routing.module';
import { IosPickerComponent } from './ios-picker.component';


@NgModule({
  declarations: [IosPickerComponent],
  imports: [
    CommonModule,
    IosPickerRoutingModule
  ]
})
export class IosPickerModule { }
