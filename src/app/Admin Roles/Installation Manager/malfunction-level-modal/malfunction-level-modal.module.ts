import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctionLevelModalPageRoutingModule } from './malfunction-level-modal-routing.module';

import { MalfunctionLevelModalPage } from './malfunction-level-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctionLevelModalPageRoutingModule
  ],
  declarations: [MalfunctionLevelModalPage]
})
export class MalfunctionLevelModalPageModule {}
