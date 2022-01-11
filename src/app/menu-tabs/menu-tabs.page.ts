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
    console.log('Navigating towards Tab Page')
    this.router.navigateByUrl('tabs/profile');
  }
}
