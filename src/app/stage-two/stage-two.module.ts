import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageTwoPageRoutingModule } from './stage-two-routing.module';

import { StageTwoPage } from './stage-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageTwoPageRoutingModule
  ],
  declarations: [StageTwoPage]
})
export class StageTwoPageModule {}
