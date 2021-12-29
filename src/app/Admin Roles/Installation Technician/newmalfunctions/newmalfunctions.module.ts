import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmalfunctionsPageRoutingModule } from './newmalfunctions-routing.module';

import { NewmalfunctionsPage } from './newmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmalfunctionsPageRoutingModule
  ],
  declarations: [NewmalfunctionsPage]
})
export class NewmalfunctionsPageModule {}
