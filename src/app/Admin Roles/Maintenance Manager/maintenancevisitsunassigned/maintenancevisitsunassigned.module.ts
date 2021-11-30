import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsunassignedPageRoutingModule } from './maintenancevisitsunassigned-routing.module';

import { MaintenancevisitsunassignedPage } from './maintenancevisitsunassigned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsunassignedPageRoutingModule
  ],
  declarations: [MaintenancevisitsunassignedPage]
})
export class MaintenancevisitsunassignedPageModule {}
