import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../../../services/notification.service'
@Component({
  selector: 'app-control-stage',
  templateUrl: './control-stage.page.html',
  styleUrls: ['./control-stage.page.scss'],
})
export class ControlStagePage implements OnInit {
  control_type = ''
  control_speed = ''
  start_date = ''
  end_date = ''
  more_information = ''
  constructor (private notifyService : NotificationService,private router: Router) { }

  ngOnInit() {
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("New Stages Added Successfully !!", "")
}
  async next(){
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
      control_type: this.control_type,
      control_speed: this.control_speed,
      start_date: this.start_date,
      end_date: this.end_date,
      more_information: this.more_information,
    }
    console.log(payload)
    this.showToasterSuccess()
    // this.router.navigateByUrl('installation_manager/liftcar_stage');
  }
  back(){
    this.router.navigateByUrl('installation_manager/engine_stage');
  }

}
