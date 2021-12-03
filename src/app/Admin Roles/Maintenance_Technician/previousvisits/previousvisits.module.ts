import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousvisitsPageRoutingModule } from './previousvisits-routing.module';

import { PreviousvisitsPage } from './previousvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousvisitsPageRoutingModule
  ],
  declarations: [PreviousvisitsPage]
})
export class PreviousvisitsPageModule {}
