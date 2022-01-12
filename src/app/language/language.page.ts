import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
     });
  }
  ngOnInit() {
  }

}
