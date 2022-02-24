import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { NewpendingcomplainPageRoutingModule } from './newpendingcomplain-routing.module';

import { NewpendingcomplainPage } from './newpendingcomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpendingcomplainPageRoutingModule,
    NgbModule
  ],
  declarations: [NewpendingcomplainPage]
})
export class NewpendingcomplainPageModule {}
