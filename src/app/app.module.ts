import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
// import { Stripe } from '@ionic-native/stripe/ngx';
// import { StripeJavaScriptPage } from './stripe-java-script/stripe-java-script.page';
import jwt_decode from "jwt-decode";
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // NzButtonModule,
  BrowserAnimationsModule,
  CommonModule,
  HttpClientModule,
  NgxSpinnerModule,
  ToastrModule.forRoot(),
 
 ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
  ],
  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {
}
