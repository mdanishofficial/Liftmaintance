import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurmonthexpiringPageRoutingModule } from './curmonthexpiring-routing.module';

import { CurmonthexpiringPage } from './curmonthexpiring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurmonthexpiringPageRoutingModule
  ],
  declarations: [CurmonthexpiringPage]
})
export class CurmonthexpiringPageModule {}
