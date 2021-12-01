import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'ionic5-star-rating';
import { IonicModule } from '@ionic/angular';

import { MyteamMaintenanceTechniciansPageRoutingModule } from './myteam-maintenance-technicians-routing.module';

import { MyteamMaintenanceTechniciansPage } from './myteam-maintenance-technicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyteamMaintenanceTechniciansPageRoutingModule,
    StarRatingModule
  ],
  declarations: [MyteamMaintenanceTechniciansPage]
})
export class MyteamMaintenanceTechniciansPageModule {}
