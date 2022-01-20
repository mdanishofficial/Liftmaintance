import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctionTypeModalPageRoutingModule } from './malfunction-type-modal-routing.module';

import { MalfunctionTypeModalPage } from './malfunction-type-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctionTypeModalPageRoutingModule
  ],
  declarations: [MalfunctionTypeModalPage]
})
export class MalfunctionTypeModalPageModule {}
