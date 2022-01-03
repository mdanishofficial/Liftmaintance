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
var refresh=false    
this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
  maintenance(){
    var refresh=false  
    console.log('inside maintenance')
    this.router.navigateByUrl('tabs/maintenancelist/'+refresh);
  }
  malfunctions(){
    var refresh=false  
    console.log('inside malfunctions')
    this.router.navigateByUrl('tabs/malfunctionslist/'+refresh);
  }
  bills(){
    var refresh=false  
    console.log('inside bills')
    this.router.navigateByUrl('tabs/unpaidbills/'+refresh);
  }
  complain(){
    console.log('inside complain')
    var refresh=false
    this.router.navigateByUrl('tabs/pendingcomplain/'+refresh);
  }
  emergencycomplain(){
    var refresh=false
    console.log('inside emergency complain')
    this.router.navigateByUrl('tabs/pendingemergencycomplain/'+refresh);
  }
}
