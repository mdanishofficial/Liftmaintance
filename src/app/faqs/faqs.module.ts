import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { IonicModule } from '@ionic/angular';
// import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FaqsPageRoutingModule } from './faqs-routing.module';
// import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { FaqsPage } from './faqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqsPageRoutingModule,
    NgbModule
    // NzCollapseModule,
    // NzTabsModule
    ],
  declarations: [FaqsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FaqsPageModule {}
