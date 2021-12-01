import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'ionic5-star-rating';
import { IonicModule } from '@ionic/angular';

import { MyteamRepairTechniciansPageRoutingModule } from './myteam-repair-technicians-routing.module';

import { MyteamRepairTechniciansPage } from './myteam-repair-technicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyteamRepairTechniciansPageRoutingModule,
    StarRatingModule
  ],
  declarations: [MyteamRepairTechniciansPage]
})
export class MyteamRepairTechniciansPageModule {}
