import { UppercasePipe } from './pipes/uppercase.pipe';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { ColorPipe } from './pipes/color.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderlistPipe } from './pipes/orderlist.pipe';



@NgModule({
  declarations: [
    // components
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    // pipes
    UppercasePipe,
    ColorPipe,
    FlyPipe,
    OrderlistPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
