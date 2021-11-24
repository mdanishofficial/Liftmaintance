import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerCurrentmalfunctionslistPageRoutingModule } from './maintenance-manager-currentmalfunctionslist-routing.module';

import { MaintenanceManagerCurrentmalfunctionslistPage } from './maintenance-manager-currentmalfunctionslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceManagerCurrentmalfunctionslistPageRoutingModule
  ],
  declarations: [MaintenanceManagerCurrentmalfunctionslistPage]
})
export class MaintenanceManagerCurrentmalfunctionslistPageModule {}
