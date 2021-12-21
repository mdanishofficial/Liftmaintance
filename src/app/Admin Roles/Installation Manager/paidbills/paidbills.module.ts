import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidbillsPageRoutingModule } from './paidbills-routing.module';

import { PaidbillsPage } from './paidbills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidbillsPageRoutingModule
  ],
  declarations: [PaidbillsPage]
})
export class PaidbillsPageModule {}
