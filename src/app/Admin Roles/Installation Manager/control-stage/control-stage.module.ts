import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlStagePageRoutingModule } from './control-stage-routing.module';

import { ControlStagePage } from './control-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlStagePageRoutingModule
  ],
  declarations: [ControlStagePage]
})
export class ControlStagePageModule {}
