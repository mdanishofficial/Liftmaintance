import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctionsdetailsPageRoutingModule } from './malfunctionsdetails-routing.module';

import { MalfunctionsdetailsPage } from './malfunctionsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctionsdetailsPageRoutingModule
  ],
  declarations: [MalfunctionsdetailsPage]
})
export class MalfunctionsdetailsPageModule {}
