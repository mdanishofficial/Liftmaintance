import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendinquiryModalPageRoutingModule } from './sendinquiry-modal-routing.module';

import { SendinquiryModalPage } from './sendinquiry-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendinquiryModalPageRoutingModule
  ],
  declarations: [SendinquiryModalPage]
})
export class SendinquiryModalPageModule {}
