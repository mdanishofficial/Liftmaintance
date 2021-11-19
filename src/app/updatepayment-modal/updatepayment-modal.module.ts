import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepaymentModalPageRoutingModule } from './updatepayment-modal-routing.module';

import { UpdatepaymentModalPage } from './updatepayment-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepaymentModalPageRoutingModule
  ],
  declarations: [UpdatepaymentModalPage]
})
export class UpdatepaymentModalPageModule {}
