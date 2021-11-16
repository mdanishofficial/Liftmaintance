import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnpaidbillsPageRoutingModule } from './unpaidbills-routing.module';

import { UnpaidbillsPage } from './unpaidbills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnpaidbillsPageRoutingModule
  ],
  declarations: [UnpaidbillsPage]
})
export class UnpaidbillsPageModule {}
