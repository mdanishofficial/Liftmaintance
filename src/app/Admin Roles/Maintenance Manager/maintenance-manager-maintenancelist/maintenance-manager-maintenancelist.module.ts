import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerMaintenancelistPageRoutingModule } from './maintenance-manager-maintenancelist-routing.module';

import { MaintenanceManagerMaintenancelistPage } from './maintenance-manager-maintenancelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceManagerMaintenancelistPageRoutingModule
  ],
  declarations: [MaintenanceManagerMaintenancelistPage]
})
export class MaintenanceManagerMaintenancelistPageModule {}
