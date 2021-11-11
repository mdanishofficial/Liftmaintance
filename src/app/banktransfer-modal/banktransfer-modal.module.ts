import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanktransferModalPageRoutingModule } from './banktransfer-modal-routing.module';

import { BanktransferModalPage } from './banktransfer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanktransferModalPageRoutingModule
  ],
  declarations: [BanktransferModalPage]
})
export class BanktransferModalPageModule {}
