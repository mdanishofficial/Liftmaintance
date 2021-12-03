import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingvisitsPageRoutingModule } from './upcomingvisits-routing.module';

import { UpcomingvisitsPage } from './upcomingvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingvisitsPageRoutingModule
  ],
  declarations: [UpcomingvisitsPage]
})
export class UpcomingvisitsPageModule {}
