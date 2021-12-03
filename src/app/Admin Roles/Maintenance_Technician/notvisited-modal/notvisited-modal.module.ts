import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotvisitedModalPageRoutingModule } from './notvisited-modal-routing.module';

import { NotvisitedModalPage } from './notvisited-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotvisitedModalPageRoutingModule
  ],
  declarations: [NotvisitedModalPage]
})
export class NotvisitedModalPageModule {}
