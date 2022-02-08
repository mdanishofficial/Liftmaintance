import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripeModalPageRoutingModule } from './stripe-modal-routing.module';

import { StripeModalPage } from './stripe-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripeModalPageRoutingModule
  ],
  declarations: [StripeModalPage]
})
export class StripeModalPageModule {}
