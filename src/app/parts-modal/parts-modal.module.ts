import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartsModalPageRoutingModule } from './parts-modal-routing.module';

import { PartsModalPage } from './parts-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartsModalPageRoutingModule
  ],
  declarations: [PartsModalPage]
})
export class PartsModalPageModule {}
