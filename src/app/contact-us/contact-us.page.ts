import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/settings');
     });
  }

  ngOnInit() {
  }

}
