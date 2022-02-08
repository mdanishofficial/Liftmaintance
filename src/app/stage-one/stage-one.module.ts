import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageOnePageRoutingModule } from './stage-one-routing.module';

import { StageOnePage } from './stage-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageOnePageRoutingModule
  ],
  declarations: [StageOnePage]
})
export class StageOnePageModule {}
