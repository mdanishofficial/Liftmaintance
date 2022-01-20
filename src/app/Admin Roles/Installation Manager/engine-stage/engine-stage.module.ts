import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineStagePageRoutingModule } from './engine-stage-routing.module';

import { EngineStagePage } from './engine-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineStagePageRoutingModule
  ],
  declarations: [EngineStagePage]
})
export class EngineStagePageModule {}
