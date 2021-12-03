import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiftdetailPageRoutingModule } from './liftdetail-routing.module';

import { LiftdetailPage } from './liftdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiftdetailPageRoutingModule
  ],
  declarations: [LiftdetailPage]
})
export class LiftdetailPageModule {}
