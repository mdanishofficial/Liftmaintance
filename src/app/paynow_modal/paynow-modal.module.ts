import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { paynow_modalPageRoutingModule } from './paynow-modal-routing.module';

import { paynow_modalPage } from './paynow-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    paynow_modalPageRoutingModule
  ],
  declarations: [paynow_modalPage]
})
export class paynow_modalPageModule {}
