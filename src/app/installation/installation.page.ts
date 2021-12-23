import { Component, OnInit } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { MalfunctionTypeModalPageRoutingModule } from '../Admin Roles/Maintenance Manager/malfunction-type-modal/malfunction-type-modal-routing.module';
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
  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
          let payload={
      user_id:'123'
          }
         this.service.getinstallation(payload).subscribe(res => {
          this.installation_data[0]=res
          console.log(this.installation_data)
        })
        }
  ngOnInit() {
  }
  installation_data=[]
  back(){
    this.router.navigateByUrl('tabs/installation_stages');
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
