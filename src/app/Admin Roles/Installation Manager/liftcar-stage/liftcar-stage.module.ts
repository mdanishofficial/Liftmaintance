import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiftcarStagePageRoutingModule } from './liftcar-stage-routing.module';

import { LiftcarStagePage } from './liftcar-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiftcarStagePageRoutingModule
  ],
  declarations: [LiftcarStagePage]
})
export class LiftcarStagePageModule {}
