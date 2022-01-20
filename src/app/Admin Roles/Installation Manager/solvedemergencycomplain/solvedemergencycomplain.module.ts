import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedemergencycomplainPageRoutingModule } from './solvedemergencycomplain-routing.module';

import { SolvedemergencycomplainPage } from './solvedemergencycomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedemergencycomplainPageRoutingModule
  ],
  declarations: [SolvedemergencycomplainPage]
})
export class SolvedemergencycomplainPageModule {}
