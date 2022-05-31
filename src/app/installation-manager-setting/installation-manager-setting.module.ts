import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerSettingPageRoutingModule } from './installation-manager-setting-routing.module';

import { InstallationManagerSettingPage } from './installation-manager-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerSettingPageRoutingModule
  ],
  declarations: [InstallationManagerSettingPage]
})
export class InstallationManagerSettingPageModule {}
