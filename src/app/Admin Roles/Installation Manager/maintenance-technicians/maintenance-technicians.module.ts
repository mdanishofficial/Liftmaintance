import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'ionic5-star-rating';
import { IonicModule } from '@ionic/angular';

import { MaintenanceTechniciansPageRoutingModule } from './maintenance-technicians-routing.module';

import { MaintenanceTechniciansPage } from './maintenance-technicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceTechniciansPageRoutingModule,
    StarRatingModule
  ],
  declarations: [MaintenanceTechniciansPage]
})
export class MaintenanceTechniciansPageModule {}
