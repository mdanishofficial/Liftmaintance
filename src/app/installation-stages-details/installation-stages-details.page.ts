import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-installation-stages-details',
  templateUrl: './installation-stages-details.page.html',
  styleUrls: ['./installation-stages-details.page.scss'],
})
export class InstallationStagesDetailsPage implements OnInit {
  stops=''
  doortype=''
  machinetype=''
  speed=''
  payloads=''
  time=''
  elevatortype=''
  startdate=''
  enddate=''
  constructor(private spinner: NgxSpinnerService,private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/installation_stages/'+refresh);
    });
    spinner.show()
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getinstallation(payload).subscribe(res => {
          this.installation_data[0]=res
          console.log(this.installation_data)
          console.log(this.installation_data[0].installation_stage)
        })
     
        spinner.hide()
        }
  ngOnInit() {
  }
  installation_data=[]
  installation_stages_data=[]
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
}
