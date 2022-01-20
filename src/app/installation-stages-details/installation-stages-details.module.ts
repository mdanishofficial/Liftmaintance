import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { IonicModule } from '@ionic/angular';

import { InstallationStagesDetailsPageRoutingModule } from './installation-stages-details-routing.module';

import { InstallationStagesDetailsPage } from './installation-stages-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationStagesDetailsPageRoutingModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InstallationStagesDetailsPage]
})
export class InstallationStagesDetailsPageModule {}
