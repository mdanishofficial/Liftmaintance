import { Component, OnInit } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {
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
  
         this.service.getoneinstallation(payload).subscribe(res => {
          this.installation_data[0]=res
          console.log(this.installation_data)
        })
        spinner.hide()
        }
  ngOnInit() {
  }
  installation_data=[]
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
//   addinstallation() {
// console.log(this.startdate)
//   let payload={
// installation_stops:this.stops,
// installation_doortype:this.doortype,
// installation_machinetype:this.machinetype,
// installation_speed:this.speed,
// installation_payloads:this.payloads,
// installation_time:this.time,
// installation_elevatortype:this.elevatortype,
// installation_start_date:this.startdate,
// installation_end_date:this.enddate,
//   }
// this.service.addinstallation(payload).subscribe(res => {
//   console.log(res)
// })
// }



  ngAfterInit(){
     $('.datepicker').datepicker({
      inline: true
    });
  }
 
}
