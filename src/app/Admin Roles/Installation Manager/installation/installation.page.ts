import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {

  constructor(private platform: Platform,private router: Router) { 

  }

  ngOnInit() {
  }
  installation_page(){
    this.router.navigateByUrl('installation_manager/installation_page');
  }
}
