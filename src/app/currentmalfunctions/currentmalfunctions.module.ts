import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentmalfunctionsPageRoutingModule } from './currentmalfunctions-routing.module';

import { CurrentmalfunctionsPage } from './currentmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentmalfunctionsPageRoutingModule
  ],
  declarations: [CurrentmalfunctionsPage]
})
export class CurrentmalfunctionsPageModule {}
