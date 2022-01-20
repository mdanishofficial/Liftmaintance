import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedcomplainPageRoutingModule } from './solvedcomplain-routing.module';

import { SolvedcomplainPage } from './solvedcomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedcomplainPageRoutingModule
  ],
  declarations: [SolvedcomplainPage]
})
export class SolvedcomplainPageModule {}
