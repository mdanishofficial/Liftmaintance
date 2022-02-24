import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  profile(){
     this.router.navigateByUrl('tabs/profile');
  }
  language(){
    this.router.navigateByUrl('tabs/language');
 }
 settings(){
  this.router.navigateByUrl('tabs/settings');
}
inquiries(){
  var refresh=true
  this.router.navigateByUrl('/tabs/inquiries/'+refresh);
}
home(){
  this.router.navigateByUrl('menu-tabs/tab1');
}
}
