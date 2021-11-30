import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientinquiriesPageRoutingModule } from './clientinquiries-routing.module';

import { ClientinquiriesPage } from './clientinquiries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientinquiriesPageRoutingModule
  ],
  declarations: [ClientinquiriesPage]
})
export class ClientinquiriesPageModule {}
