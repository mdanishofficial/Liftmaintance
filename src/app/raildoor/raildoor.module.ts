import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaildoorPageRoutingModule } from './raildoor-routing.module';

import { RaildoorPage } from './raildoor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaildoorPageRoutingModule
  ],
  declarations: [RaildoorPage]
})
export class RaildoorPageModule {}
