import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctionslistPageRoutingModule } from './malfunctionslist-routing.module';

import { MalfunctionslistPage } from './malfunctionslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctionslistPageRoutingModule
  ],
  declarations: [MalfunctionslistPage]
})
export class MalfunctionslistPageModule {}
