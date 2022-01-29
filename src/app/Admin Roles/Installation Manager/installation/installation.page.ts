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
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
   }

  ngOnInit() {
  }
  installation_page(){
    this.router.navigateByUrl('installation_manager/installation_page');
  }
  installation_data=[
    {
      client_name:'Ahmad Gul',
       location:'New City',
       installation_level:'Level-1',
       installation_status:'Pending Payment'
  },
  {
    client_name:'Shadab Khan',
     location:'New City',
     installation_level:'Level-2',
     installation_status:'Pending Payment'
},
{
  client_name:'Hassan Ali',
   location:'New City',
   installation_level:'Level-3',
   installation_status:'Installing'
}
  ]
}
