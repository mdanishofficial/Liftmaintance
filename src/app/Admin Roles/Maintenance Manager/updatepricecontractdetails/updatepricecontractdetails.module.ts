import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepricecontractdetailsPageRoutingModule } from './updatepricecontractdetails-routing.module';

import { UpdatepricecontractdetailsPage } from './updatepricecontractdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepricecontractdetailsPageRoutingModule
  ],
  declarations: [UpdatepricecontractdetailsPage]
})
export class UpdatepricecontractdetailsPageModule {}
