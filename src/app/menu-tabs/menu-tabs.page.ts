import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.page.html',
  styleUrls: ['./menu-tabs.page.scss'],
})
export class MenuTabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
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
  this.router.navigateByUrl('tabs/inquiries');
}
home(){
  this.router.navigateByUrl('menu-tabs/tab1');
}
}
