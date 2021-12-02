import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsassignedPageRoutingModule } from './maintenancevisitsassigned-routing.module';

import { MaintenancevisitsassignedPage } from './maintenancevisitsassigned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsassignedPageRoutingModule,
    NgbModule
  ],
  declarations: [MaintenancevisitsassignedPage],
  bootstrap: [MaintenancevisitsassignedPage]
})
export class MaintenancevisitsassignedPageModule {}
