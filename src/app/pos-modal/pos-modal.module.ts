import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosModalPageRoutingModule } from './pos-modal-routing.module';
import { CodeInputModule } from 'angular-code-input';
import { PosModalPage } from './pos-modal.page';
// import {NgForm} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosModalPageRoutingModule,
    CodeInputModule,
    // NgForm
  ],
  declarations: [PosModalPage]
})
export class PosModalPageModule {}
