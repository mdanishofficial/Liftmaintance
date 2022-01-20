import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractdetailsPageRoutingModule } from './contractdetails-routing.module';

import { ContractdetailsPage } from './contractdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractdetailsPageRoutingModule
  ],
  declarations: [ContractdetailsPage]
})
export class ContractdetailsPageModule {}
