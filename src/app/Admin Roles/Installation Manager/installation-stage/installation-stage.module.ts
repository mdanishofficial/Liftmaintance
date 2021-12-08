import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationStagePageRoutingModule } from './installation-stage-routing.module';

import { InstallationStagePage } from './installation-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationStagePageRoutingModule
  ],
  declarations: [InstallationStagePage]
})
export class InstallationStagePageModule {}
