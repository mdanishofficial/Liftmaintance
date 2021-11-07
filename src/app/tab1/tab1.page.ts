import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// public swiperConfig:SwiperOptions={
// pagination:true
// };
  constructor() {}
// ngOnInit(){
//   Swiper.use([Pagination]);
// }
}
