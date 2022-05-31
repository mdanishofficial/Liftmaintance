import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerNotificationPageRoutingModule } from './installation-manager-notification-routing.module';

import { InstallationManagerNotificationPage } from './installation-manager-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerNotificationPageRoutingModule
  ],
  declarations: [InstallationManagerNotificationPage]
})
export class InstallationManagerNotificationPageModule {}
