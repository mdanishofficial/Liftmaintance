import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientlistingPageRoutingModule } from './clientlisting-routing.module';

import { ClientlistingPage } from './clientlisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientlistingPageRoutingModule
  ],
  declarations: [ClientlistingPage]
})
export class ClientlistingPageModule {}
