import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerSolvedmalfunctionslistPageRoutingModule } from './maintenance-manager-solvedmalfunctionslist-routing.module';

import { MaintenanceManagerSolvedmalfunctionslistPage } from './maintenance-manager-solvedmalfunctionslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceManagerSolvedmalfunctionslistPageRoutingModule
  ],
  declarations: [MaintenanceManagerSolvedmalfunctionslistPage]
})
export class MaintenanceManagerSolvedmalfunctionslistPageModule {}
