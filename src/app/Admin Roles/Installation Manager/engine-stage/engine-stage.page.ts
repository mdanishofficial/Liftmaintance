import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
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
  constructor(private router: Router) { }

  ngOnInit() {
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
    this.router.navigateByUrl('installation_manager/control_stage');
  }
  async back(){
    this.router.navigateByUrl('installation_manager/liftcar_stage');
  }
}
