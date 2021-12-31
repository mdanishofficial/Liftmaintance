import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-controldelivery',
  templateUrl: './controldelivery.page.html',
  styleUrls: ['./controldelivery.page.scss'],
})
export class ControldeliveryPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getcontroldelivery(payload).subscribe(res => {
      this.controldelivery_data = res;
   this.data[0].controldelivery_type=this.controldelivery_data[0].controldelivery_type
   this.data[0].controldelivery_speed=this.controldelivery_data[0].controldelivery_speed
   this.data[0].controldelivery_features=this.controldelivery_data[0].controldelivery_features
   this.data[0].controldelivery_emergency_battery=this.controldelivery_data[0].controldelivery_emergency_battery
   this.data[0].controldelivery_vvvf_speed_smoothing=this.controldelivery_data[0].controldelivery_vvvf_speed_smoothing
   this.data[0].controldelivery_device=this.controldelivery_data[0].controldelivery_device
   this.data[0].controldelivery_lightning_arrester=this.controldelivery_data[0].controldelivery_lightning_arrester
   this.data[0].controldelivery_manufacture=this.controldelivery_data[0].controldelivery_manufacture
   this.data[0].controldelivery_payloads=this.controldelivery_data[0].controldelivery_payloads
  console.log(res)
  })
  }
  ngOnInit() {
  }
  controldelivery_data=[]
  public data = [
{
  controldelivery_type:'Cabin_dimensions',
  controldelivery_speed:'Cabin Shape',
  controldelivery_features:'Cabin Roof',
  controldelivery_emergency_battery:'Cabin Shape',
  controldelivery_vvvf_speed_smoothing:'Cabin Roof',
  controldelivery_device:'Cabin Shape',
  controldelivery_lightning_arrester:'Cabin Roof',
  controldelivery_manufacture:'Cabin Shape',
  controldelivery_payloads:'Cabin Roof',
}
  ]
  back() {
  this.router.navigateByUrl('tabs/installation_stages');
  }
}
