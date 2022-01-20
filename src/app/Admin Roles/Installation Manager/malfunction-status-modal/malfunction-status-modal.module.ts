import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctionStatusModalPageRoutingModule } from './malfunction-status-modal-routing.module';

import { MalfunctionStatusModalPage } from './malfunction-status-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctionStatusModalPageRoutingModule
  ],
  declarations: [MalfunctionStatusModalPage]
})
export class MalfunctionStatusModalPageModule {}
