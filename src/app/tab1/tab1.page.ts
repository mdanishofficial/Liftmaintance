import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { IonicSwiper } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router) { }
  installation_stages(){
    console.log('inside Installation')
    this.router.navigateByUrl('tabs/installation_stages');
  }
  maintenance(){
    console.log('inside maintenance')
    this.router.navigateByUrl('tabs/maintenancelist');
  }
  malfunctions(){
    console.log('inside malfunctions')
    this.router.navigateByUrl('tabs/malfunctionslist');
  }
  bills(){
    console.log('inside bills')
    this.router.navigateByUrl('tabs/unpaidbills');
  }
  complain(){
    console.log('inside complain')
    this.router.navigateByUrl('tabs/pendingcomplain');
  }
  emergencycomplain(){
    console.log('inside emergency complain')
    this.router.navigateByUrl('tabs/pendingemergencycomplain');
  }
}
