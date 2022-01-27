import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],

})
export class FaqsPage implements OnInit {
  public isCollapsed: boolean[] = [];

  constructor(private service: InstallationService, private platform: Platform, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
 this.call_api()
  }

  ngOnInit() {
  }
  call_api() {
    this.service.getfaqs().subscribe(res => {
      this.faqs_data = res
      console.log(res)
      for (var i = 0; i < this.faqs_data.length; i++) {
        this.isCollapsed[i] = true
      }
    })
  }
  faqs_data = []

  // selected = []
  // changeselected(id) {
  //   for (var i = 0; i < this.faqs_data.length; i++) {
  //     this.selected[i] = false
  //   }
  //   this.selected[id] = true
  //   console.log(this.selected)
  // }
  notifications() {
    this.router.navigateByUrl('tabs/notifications');
  }
  async inquiries() {
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs() {
    this.router.navigateByUrl('/tabs/faqs');
  }
}
