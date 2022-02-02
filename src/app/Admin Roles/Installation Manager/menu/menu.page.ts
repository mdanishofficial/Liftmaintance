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
    var refresh=true
    this.router.navigateByUrl('installation_manager/installation/'+refresh);
  }
async malfunction(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist/'+refresh);
}
myclient(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/myclient/'+refresh);
}
bills(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/unpaidbills/'+refresh);
}
complain(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/pendingcomplain/'+refresh);
}
emergencycomplain(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
}
myteam(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/repair_technicians/'+refresh);
}
}
