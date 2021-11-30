import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsnotvisitsPageRoutingModule } from './maintenancevisitsnotvisits-routing.module';

import { MaintenancevisitsnotvisitsPage } from './maintenancevisitsnotvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsnotvisitsPageRoutingModule
  ],
  declarations: [MaintenancevisitsnotvisitsPage]
})
export class MaintenancevisitsnotvisitsPageModule {}
