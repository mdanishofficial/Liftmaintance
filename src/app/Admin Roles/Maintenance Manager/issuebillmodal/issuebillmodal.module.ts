import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssuebillmodalPageRoutingModule } from './issuebillmodal-routing.module';

import { IssuebillmodalPage } from './issuebillmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssuebillmodalPageRoutingModule
  ],
  declarations: [IssuebillmodalPage]
})
export class IssuebillmodalPageModule {}
