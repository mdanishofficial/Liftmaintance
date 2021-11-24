import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyclientPageRoutingModule } from './myclient-routing.module';

import { MyclientPage } from './myclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyclientPageRoutingModule
  ],
  declarations: [MyclientPage]
})
export class MyclientPageModule {}
