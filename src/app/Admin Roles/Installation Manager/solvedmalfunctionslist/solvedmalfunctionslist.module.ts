import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedmalfunctionslistPageRoutingModule } from './solvedmalfunctionslist-routing.module';

import { SolvedmalfunctionslistPage } from './solvedmalfunctionslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedmalfunctionslistPageRoutingModule
  ],
  declarations: [SolvedmalfunctionslistPage]
})
export class SolvedmalfunctionslistPageModule {}
