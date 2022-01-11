import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerTabsPageRoutingModule } from './installation-manager-tabs-routing.module';

import { InstallationManagerTabsPage } from './installation-manager-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerTabsPageRoutingModule
  ],
  declarations: [InstallationManagerTabsPage]
})
export class InstallationManagerTabsPageModule {}
