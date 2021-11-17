import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewemergencycomplainPageRoutingModule } from './newemergencycomplain-routing.module';

import { NewemergencycomplainPage } from './newemergencycomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewemergencycomplainPageRoutingModule
  ],
  declarations: [NewemergencycomplainPage]
})
export class NewemergencycomplainPageModule {}
