import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingemergencycomplainPageRoutingModule } from './pendingemergencycomplain-routing.module';

import { PendingemergencycomplainPage } from './pendingemergencycomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingemergencycomplainPageRoutingModule
  ],
  declarations: [PendingemergencycomplainPage]
})
export class PendingemergencycomplainPageModule {}
