import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-liftcar-stage',
  templateUrl: './liftcar-stage.page.html',
  styleUrls: ['./liftcar-stage.page.scss'],
})
export class LiftcarStagePage implements OnInit {
  liftcar_type = ''
  liftcar_dimension = ''
  liftcar_roof_design = ''
  start_date = ''
  end_date = ''
  more_information = ''
  image
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('installation_manager/railanddoor_stage/'+refresh);
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
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('installation_manager/railanddoor_stage/'+refresh);
    });
  }
  async next() {
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
      liftcar_type: this.liftcar_type,
      liftcar_dimension: this.liftcar_dimension,
      liftcar_roof_design: this.liftcar_roof_design,
      start_date: this.start_date,
      end_date: this.end_date,
      more_information: this.more_information,
      image:this.image
    }
    console.log(payload)
    var refresh=false
    this.router.navigateByUrl('installation_manager/engine_stage/'+refresh);
  }
  back() {
    var refresh=true
    this.router.navigateByUrl('installation_manager/railanddoor_stage/'+refresh);
  }
}
