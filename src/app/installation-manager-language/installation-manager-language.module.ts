import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerLanguagePageRoutingModule } from './installation-manager-language-routing.module';

import { InstallationManagerLanguagePage } from './installation-manager-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerLanguagePageRoutingModule
  ],
  declarations: [InstallationManagerLanguagePage]
})
export class InstallationManagerLanguagePageModule {}
