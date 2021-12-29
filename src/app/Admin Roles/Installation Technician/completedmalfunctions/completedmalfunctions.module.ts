import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedmalfunctionsPageRoutingModule } from './completedmalfunctions-routing.module';

import { CompletedmalfunctionsPage } from './completedmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedmalfunctionsPageRoutingModule
  ],
  declarations: [CompletedmalfunctionsPage]
})
export class CompletedmalfunctionsPageModule {}
