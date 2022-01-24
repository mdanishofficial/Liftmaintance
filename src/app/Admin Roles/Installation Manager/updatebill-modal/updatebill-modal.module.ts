import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatebillModalPageRoutingModule } from './updatebill-modal-routing.module';

import { UpdatebillModalPage } from './updatebill-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebillModalPageRoutingModule
  ],
  declarations: [UpdatebillModalPage]
})
export class UpdatebillModalPageModule {}
