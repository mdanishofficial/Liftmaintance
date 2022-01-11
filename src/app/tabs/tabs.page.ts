import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}
  home(){
    this.router.navigateByUrl('menu-tabs/tab1');
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  profile(){
    this.router.navigateByUrl('tabs/profile');
  }
}
