import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsPageRoutingModule } from './maintenancevisits-routing.module';

import { MaintenancevisitsPage } from './maintenancevisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsPageRoutingModule
  ],
  declarations: [MaintenancevisitsPage]
})
export class MaintenancevisitsPageModule {}
