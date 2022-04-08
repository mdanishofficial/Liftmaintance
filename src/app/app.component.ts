import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public platform: Platform,) {
   // SplashScreen.hide();

   this.platform.ready().then(async () => {
    setTimeout(()=>{
       SplashScreen.hide({
         fadeOutDuration: 1000
       });
     }, 2000)
})

  }



}
