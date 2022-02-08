import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageFourPageRoutingModule } from './stage-four-routing.module';

import { StageFourPage } from './stage-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageFourPageRoutingModule
  ],
  declarations: [StageFourPage]
})
export class StageFourPageModule {}
