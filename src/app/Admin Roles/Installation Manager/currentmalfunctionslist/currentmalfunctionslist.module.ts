import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentmalfunctionslistPageRoutingModule } from './currentmalfunctionslist-routing.module';

import { CurrentmalfunctionslistPage } from './currentmalfunctionslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentmalfunctionslistPageRoutingModule
  ],
  declarations: [CurrentmalfunctionslistPage]
})
export class CurrentmalfunctionslistPageModule {}
