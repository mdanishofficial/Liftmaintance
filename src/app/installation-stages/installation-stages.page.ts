import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-installation-stages',
  templateUrl: './installation-stages.page.html',
  styleUrls: ['./installation-stages.page.scss'],
})

export class InstallationStagesPage implements OnInit {
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService, private router: Router) {
    this.call_api();
   }
  ngOnInit() {
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          this.call_api()
        }
      });
     }
      sub
      refresh
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
   // cabin_status
    let payload = {
      user_id:decoded.user_id,
      // railanddoor_id: "a84edc",
      // cabin_id: '642766',
      // machine_id: '4852e1',
      // controldelivery_id: "1a5eec",
    }
    this.service.getrailanddoor(payload).subscribe(res => {
      console.log(res)
      this.railanddoor_data = res;
    })
    this.service.getcabin(payload).subscribe(res => {
      this.cab_data = res;
    })
    this.service.getmachine(payload).subscribe(res => {
      this.machine_data = res;
    })
    this.service.getcontroldelivery(payload).subscribe(res => {
      this.controldelivery_data = res;
    })
  }
 
  railanddoor(){
    this.router.navigateByUrl('raildoor');
  }
  cabin(){
    this.router.navigateByUrl('cabin');
  }
  machine(){
    this.router.navigateByUrl('machine');
  }
  controldelivery(){
    this.router.navigateByUrl('controldelivery');
  }
  installation() {
  this.router.navigateByUrl('installation');
  }
  
  railanddoor_data;
  cab_data = []
  machine_data = []
  controldelivery_data = []
}
