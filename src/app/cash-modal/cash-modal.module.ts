import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashModalPageRoutingModule } from './cash-modal-routing.module';

import { CashModalPage } from './cash-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashModalPageRoutingModule
  ],
  declarations: [CashModalPage]
})
export class CashModalPageModule {}
