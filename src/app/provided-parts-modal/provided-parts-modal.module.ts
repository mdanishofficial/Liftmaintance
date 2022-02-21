import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvidedPartsModalPageRoutingModule } from './provided-parts-modal-routing.module';

import { ProvidedPartsModalPage } from './provided-parts-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvidedPartsModalPageRoutingModule
  ],
  declarations: [ProvidedPartsModalPage]
})
export class ProvidedPartsModalPageModule {}
