import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousreportsPageRoutingModule } from './previousreports-routing.module';

import { PreviousreportsPage } from './previousreports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousreportsPageRoutingModule
  ],
  declarations: [PreviousreportsPage]
})
export class PreviousreportsPageModule {}
