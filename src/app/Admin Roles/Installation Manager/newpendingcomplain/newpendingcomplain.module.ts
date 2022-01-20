import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpendingcomplainPageRoutingModule } from './newpendingcomplain-routing.module';

import { NewpendingcomplainPage } from './newpendingcomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpendingcomplainPageRoutingModule
  ],
  declarations: [NewpendingcomplainPage]
})
export class NewpendingcomplainPageModule {}
