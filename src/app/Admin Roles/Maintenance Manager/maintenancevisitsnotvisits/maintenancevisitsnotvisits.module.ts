import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsnotvisitsPageRoutingModule } from './maintenancevisitsnotvisits-routing.module';

import { MaintenancevisitsnotvisitsPage } from './maintenancevisitsnotvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancevisitsnotvisitsPageRoutingModule,
    NgbModule
  ],
  declarations: [MaintenancevisitsnotvisitsPage]
})
export class MaintenancevisitsnotvisitsPageModule {}
