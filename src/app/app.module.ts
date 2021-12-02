import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouteReuseStrategy } from '@angular/router';
// import { SwiperModule } from 'swiper/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // NzButtonModule,
  BrowserAnimationsModule,
 
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
 
})
export class AppModule {
}
