import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
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
  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/railanddoor_stage');
    });
   }
  ngOnInit() {
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
    this.router.navigateByUrl('installation_manager/engine_stage');
  }
  back() {
    this.router.navigateByUrl('installation_manager/railanddoor_stage');
  }
}
