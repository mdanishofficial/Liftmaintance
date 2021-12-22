import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-maintenancelist',
  templateUrl: './maintenancelist.page.html',
  styleUrls: ['./maintenancelist.page.scss'],
})
export class MaintenancelistPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    let payload = {
      user_id: "123"
    }
    this.service.getmaintenance(payload).subscribe(res => {
     this.maintenance_data = res;
      console.log(this.maintenance_data)
    })
  }

  ngOnInit() {
  }
  maintenance_data = []
  technicianspage(){
    this.router.navigateByUrl('tabs/visitdetails');
  }
  back() {
    this.router.navigateByUrl('tabs/tab1');
    }
}
