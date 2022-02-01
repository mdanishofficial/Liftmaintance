import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../../../services/notification.service';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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
  constructor (public activatedRoute: ActivatedRoute,private platform: Platform,private notifyService : NotificationService,private router: Router) {

    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/engine_stage/'+refresh);
    });
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
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/engine_stage/'+refresh);
    });
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
    var refresh=true
    this.router.navigateByUrl('installation_manager/engine_stage/'+refresh);
  }

}
