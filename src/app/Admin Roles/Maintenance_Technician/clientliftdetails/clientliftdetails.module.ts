import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientliftdetailsPageRoutingModule } from './clientliftdetails-routing.module';

import { ClientliftdetailsPage } from './clientliftdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientliftdetailsPageRoutingModule
  ],
  declarations: [ClientliftdetailsPage]
})
export class ClientliftdetailsPageModule {}
