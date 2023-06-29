import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
