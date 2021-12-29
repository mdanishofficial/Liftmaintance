import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
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
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getmaintenance(payload).subscribe(res => {
     this.maintenance_data = res;
      console.log(this.maintenance_data)
    })
  }

  ngOnInit() {
  }
  maintenance_data = []
  technicianspage(id){
     this.router.navigateByUrl('tabs/visitdetails/'+id);
  }
  back() {
    this.router.navigateByUrl('tabs/tab1');
    }
}
