import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-installation-manager-tabs',
  templateUrl: './installation-manager-tabs.page.html',
  styleUrls: ['./installation-manager-tabs.page.scss'],
})
export class InstallationManagerTabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('installation_manager/menu');
  }
}
