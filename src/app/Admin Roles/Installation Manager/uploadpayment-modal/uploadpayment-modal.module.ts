import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadpaymentModalPageRoutingModule } from './uploadpayment-modal-routing.module';

import { UploadpaymentModalPage } from './uploadpayment-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadpaymentModalPageRoutingModule
  ],
  declarations: [UploadpaymentModalPage]
})
export class UploadpaymentModalPageModule {}
