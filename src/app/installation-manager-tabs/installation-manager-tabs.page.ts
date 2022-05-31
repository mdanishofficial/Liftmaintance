import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-installation-manager-tabs',
  templateUrl: './installation-manager-tabs.page.html',
  styleUrls: ['./installation-manager-tabs.page.scss'],
})
export class InstallationManagerTabsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  notifications() {
    this.router.navigateByUrl('installation_manager_notifications');
  }
  profile() {
    this.router.navigateByUrl('installation_manager_profile');
  }
  language() {
    this.router.navigateByUrl('installation_manager_language');
  }
  settings() {
    this.router.navigateByUrl('installation_manager_setting');
  }
  inquiries() {
    var refresh = true;
    this.router.navigateByUrl('installation_manager_inquiries' + refresh);
  }
  home() {
    this.router.navigateByUrl('installation_manager/menu');
  }
}
