import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceMalfunctionDetailViewPageRoutingModule } from './maintenance-malfunction-detail-view-routing.module';

import { MaintenanceMalfunctionDetailViewPage } from './maintenance-malfunction-detail-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceMalfunctionDetailViewPageRoutingModule
  ],
  declarations: [MaintenanceMalfunctionDetailViewPage]
})
export class MaintenanceMalfunctionDetailViewPageModule {}
