import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-engine-stage',
  templateUrl: './engine-stage.page.html',
  styleUrls: ['./engine-stage.page.scss'],
})
export class EngineStagePage implements OnInit {
  engine_name = ''
  engine_type = ''
  engine_capacity = ''
  engine_speed=''
  engine_warranty=''
  start_date = ''
  end_date = ''
  more_information = ''
  image
  constructor(public activatedRoute: ActivatedRoute,private service: InstallationManagerServicesService,private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('installation_manager/liftcar_stage/'+refresh);
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
      this.router.navigateByUrl('installation_manager/liftcar_stage/'+refresh);
    });
  }
  async next(){
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
      engine_name: this.engine_name,
      engine_type: this.engine_type,
      engine_capacity: this.engine_capacity,
      engine_speed: this.engine_speed,
      engine_warranty: this.engine_warranty,
      start_date: this.start_date,
      end_date: this.end_date,
      more_information: this.more_information,
      image:this.image
    }
    console.log(payload)
    this.service.addinstallationstage(payload).subscribe(res => {
      console.log(res)
    })
    var refresh=true
    this.router.navigateByUrl('installation_manager/control_stage/'+refresh);
  }
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/liftcar_stage/'+refresh);
  }
}
