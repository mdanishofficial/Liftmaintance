import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-installation-stages',
  templateUrl: './installation-stages.page.html',
  styleUrls: ['./installation-stages.page.scss'],
})

export class InstallationStagesPage implements OnInit {
  constructor(private service: InstallationService, private router: Router) {
    // cabin_status
    let payload = {
      railanddoor_id: "a84edc",
      cabin_id: '642766',
      machine_id: '4852e1',
      controldelivery_id: "1a5eec",
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
  ngOnInit() {
  }
  railanddoor(){
    this.router.navigateByUrl('tabs/raildoor');
  }
  cabin(){
    this.router.navigateByUrl('tabs/cabin');
  }
  machine(){
    this.router.navigateByUrl('tabs/machine');
  }
  controldelivery(){
    this.router.navigateByUrl('tabs/controldelivery');
  }
  installation() {
  this.router.navigateByUrl('tabs/installation');
  }
  
  railanddoor_data;
  cab_data = []
  machine_data = []
  controldelivery_data = []
}
