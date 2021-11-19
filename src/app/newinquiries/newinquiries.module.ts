import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewinquiriesPageRoutingModule } from './newinquiries-routing.module';

import { NewinquiriesPage } from './newinquiries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewinquiriesPageRoutingModule
  ],
  declarations: [NewinquiriesPage]
})
export class NewinquiriesPageModule {}
