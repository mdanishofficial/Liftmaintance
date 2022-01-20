import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { IonicModule } from '@ionic/angular';
import { InstallationStagesPageRoutingModule } from './installation-stages-routing.module';
import { InstallationStagesPage } from './installation-stages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationStagesPageRoutingModule,
    NgxSpinnerModule
    // BrowserModule
  ],
  declarations: [InstallationStagesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstallationStagesPageModule {}
