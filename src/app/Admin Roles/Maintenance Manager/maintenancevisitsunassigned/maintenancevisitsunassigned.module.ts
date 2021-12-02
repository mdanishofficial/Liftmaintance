import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsunassignedPageRoutingModule } from './maintenancevisitsunassigned-routing.module';

import { MaintenancevisitsunassignedPage } from './maintenancevisitsunassigned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsunassignedPageRoutingModule,
    NgbModule
  ],
  declarations: [MaintenancevisitsunassignedPage]
})
export class MaintenancevisitsunassignedPageModule {}
