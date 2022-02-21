import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { NewemergencycomplainPageRoutingModule } from './newemergencycomplain-routing.module';

import { NewemergencycomplainPage } from './newemergencycomplain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewemergencycomplainPageRoutingModule,
    NgbModule
  ],
  declarations: [NewemergencycomplainPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewemergencycomplainPageModule {}
