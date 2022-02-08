import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageThreePageRoutingModule } from './stage-three-routing.module';

import { StageThreePage } from './stage-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageThreePageRoutingModule
  ],
  declarations: [StageThreePage]
})
export class StageThreePageModule {}
