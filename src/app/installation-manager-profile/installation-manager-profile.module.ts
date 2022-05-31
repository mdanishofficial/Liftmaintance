import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerProfilePageRoutingModule } from './installation-manager-profile-routing.module';

import { InstallationManagerProfilePage } from './installation-manager-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerProfilePageRoutingModule
  ],
  declarations: [InstallationManagerProfilePage]
})
export class InstallationManagerProfilePageModule {}
