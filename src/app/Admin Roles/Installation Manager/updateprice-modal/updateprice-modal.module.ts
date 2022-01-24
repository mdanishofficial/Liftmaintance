import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepriceModalPageRoutingModule } from './updateprice-modal-routing.module';

import { UpdatepriceModalPage } from './updateprice-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepriceModalPageRoutingModule
  ],
  declarations: [UpdatepriceModalPage]
})
export class UpdatepriceModalPageModule {}
