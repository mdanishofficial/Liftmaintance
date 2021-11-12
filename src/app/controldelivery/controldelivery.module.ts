import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControldeliveryPageRoutingModule } from './controldelivery-routing.module';

import { ControldeliveryPage } from './controldelivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControldeliveryPageRoutingModule
  ],
  declarations: [ControldeliveryPage]
})
export class ControldeliveryPageModule {}
