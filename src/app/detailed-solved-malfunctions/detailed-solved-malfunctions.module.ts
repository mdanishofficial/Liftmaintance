import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedSolvedMalfunctionsPageRoutingModule } from './detailed-solved-malfunctions-routing.module';

import { DetailedSolvedMalfunctionsPage } from './detailed-solved-malfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedSolvedMalfunctionsPageRoutingModule
  ],
  declarations: [DetailedSolvedMalfunctionsPage]
})
export class DetailedSolvedMalfunctionsPageModule {}
