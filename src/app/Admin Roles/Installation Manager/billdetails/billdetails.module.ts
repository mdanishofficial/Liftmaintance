import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilldetailsPageRoutingModule } from './billdetails-routing.module';

import { BilldetailsPage } from './billdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilldetailsPageRoutingModule
  ],
  declarations: [BilldetailsPage]
})
export class BilldetailsPageModule {}
