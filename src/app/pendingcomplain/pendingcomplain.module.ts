import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingcomplainPageRoutingModule } from './pendingcomplain-routing.module';

import { PendingcomplainPage } from './pendingcomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingcomplainPageRoutingModule
  ],
  declarations: [PendingcomplainPage]
})
export class PendingcomplainPageModule {}
