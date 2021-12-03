import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodaysvisitsPageRoutingModule } from './todaysvisits-routing.module';

import { TodaysvisitsPage } from './todaysvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaysvisitsPageRoutingModule
  ],
  declarations: [TodaysvisitsPage]
})
export class TodaysvisitsPageModule {}
