import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForwardmalfunctionsModalPageRoutingModule } from './forwardmalfunctions-modal-routing.module';

import { ForwardmalfunctionsModalPage } from './forwardmalfunctions-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForwardmalfunctionsModalPageRoutingModule
  ],
  declarations: [ForwardmalfunctionsModalPage]
})
export class ForwardmalfunctionsModalPageModule {}
