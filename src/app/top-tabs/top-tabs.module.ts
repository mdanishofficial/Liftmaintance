import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopTabsPageRoutingModule } from './top-tabs-routing.module';

import { TopTabsPage } from './top-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopTabsPageRoutingModule
  ],
  declarations: [TopTabsPage]
})
export class TopTabsPageModule {}
