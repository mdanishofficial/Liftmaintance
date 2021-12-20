import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { InstallationPageRoutingModule } from './installation-routing.module';

import { InstallationPage } from './installation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationPageRoutingModule,
    // HttpClient
  ],
  declarations: [InstallationPage]
})
export class InstallationPageModule {}
