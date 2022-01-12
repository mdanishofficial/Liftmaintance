import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
     this.router.navigateByUrl('menu-tabs/tab1');
    });
  }

  ngOnInit() {
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  contact_us(){
    this.router.navigateByUrl('tabs/contact_us');
  }
}
