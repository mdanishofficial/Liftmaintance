import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { InstallationStagesPageRoutingModule } from './installation-stages-routing.module';
import { InstallationStagesPage } from './installation-stages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationStagesPageRoutingModule,
    // BrowserModule
  ],
  declarations: [InstallationStagesPage]
})
export class InstallationStagesPageModule {}
