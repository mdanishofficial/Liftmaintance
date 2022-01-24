import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private platform: Platform,private router: Router) { 

  }

  ngOnInit() {
  }
  async installation(){
    this.router.navigateByUrl('installation_manager/installation');
  }
async malfunction(){
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist');
}
myclient(){
  this.router.navigateByUrl('installation_manager/myclient');
}
bills(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/unpaidbills/'+refresh);
}
complain(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/pendingcomplain/'+refresh);
}
emergencycomplain(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
}
myteam(){
  this.router.navigateByUrl('installation_manager/repair_technicians');
}
}
