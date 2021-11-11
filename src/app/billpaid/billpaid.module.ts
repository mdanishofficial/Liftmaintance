import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillpaidPageRoutingModule } from './billpaid-routing.module';

import { BillpaidPage } from './billpaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillpaidPageRoutingModule
  ],
  declarations: [BillpaidPage]
})
export class BillpaidPageModule {}
