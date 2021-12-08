import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationPagePageRoutingModule } from './installation-page-routing.module';

import { InstallationPagePage } from './installation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationPagePageRoutingModule
  ],
  declarations: [InstallationPagePage]
})
export class InstallationPagePageModule {}
