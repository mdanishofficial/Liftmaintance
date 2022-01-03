import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-machine',
  templateUrl: './machine.page.html',
  styleUrls: ['./machine.page.scss'],
})
export class MachinePage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/installation_stages/'+refresh);
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getmachine(payload).subscribe(res => {
      this.machine_data = res;
   this.data[0].machine_name=this.machine_data[0].machine_name
   this.data[0].machine_manufacture=this.machine_data[0].machine_manufacture
   this.data[0].machine_payloads=this.machine_data[0].machine_payloads
   this.data[0].machine_speed=this.machine_data[0].machine_speed
   this.data[0].machine_type=this.machine_data[0].machine_type
  })
  }
  ngOnInit() {
  }
  machine_data=[]
  public data = [
{
  machine_name:'Machine Name',
  machine_manufacture:'Machine Manufacture',
  machine_payloads:'Machine Payloads',
  machine_speed:'Machine Speed',
  machine_type:'Machine Type',

}
  ]
  back() {
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }

}
