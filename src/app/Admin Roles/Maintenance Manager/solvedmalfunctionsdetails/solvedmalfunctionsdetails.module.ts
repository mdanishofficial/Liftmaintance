import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedmalfunctionsdetailsPageRoutingModule } from './solvedmalfunctionsdetails-routing.module';

import { SolvedmalfunctionsdetailsPage } from './solvedmalfunctionsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedmalfunctionsdetailsPageRoutingModule
  ],
  declarations: [SolvedmalfunctionsdetailsPage]
})
export class SolvedmalfunctionsdetailsPageModule {}
