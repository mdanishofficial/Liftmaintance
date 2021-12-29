import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceMalfunctionDetailUpdatePageRoutingModule } from './maintenance-malfunction-detail-update-routing.module';

import { MaintenanceMalfunctionDetailUpdatePage } from './maintenance-malfunction-detail-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceMalfunctionDetailUpdatePageRoutingModule
  ],
  declarations: [MaintenanceMalfunctionDetailUpdatePage]
})
export class MaintenanceMalfunctionDetailUpdatePageModule {}
