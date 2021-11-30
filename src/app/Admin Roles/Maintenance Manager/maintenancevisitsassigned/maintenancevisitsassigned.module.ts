import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsassignedPageRoutingModule } from './maintenancevisitsassigned-routing.module';

import { MaintenancevisitsassignedPage } from './maintenancevisitsassigned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsassignedPageRoutingModule
  ],
  declarations: [MaintenancevisitsassignedPage]
})
export class MaintenancevisitsassignedPageModule {}
