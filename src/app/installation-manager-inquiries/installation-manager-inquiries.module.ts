import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationManagerInquiriesPageRoutingModule } from './installation-manager-inquiries-routing.module';

import { InstallationManagerInquiriesPage } from './installation-manager-inquiries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationManagerInquiriesPageRoutingModule
  ],
  declarations: [InstallationManagerInquiriesPage]
})
export class InstallationManagerInquiriesPageModule {}
