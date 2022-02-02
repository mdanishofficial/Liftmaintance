import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-railanddoor-stage',
  templateUrl: './railanddoor-stage.page.html',
  styleUrls: ['./railanddoor-stage.page.scss'],
})
export class RailanddoorStagePage implements OnInit {
  door_type=''
  door_dimension=''
  rail_dimension_type=''
  door_design=''
  start_date=''
  end_date=''
  more_information=''
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) {
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/installation_page/'+refresh);
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
      this.router.navigateByUrl('installation_manager/installation_page/'+refresh);
    });
  }
  async next(){
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
     user_id:decoded.user_id,
     door_type:this.door_type,
     door_dimension:this.door_dimension,
     rail_dimension_type:this.rail_dimension_type,
     door_design:this.door_design,
     start_date:this.start_date,
     end_date:this.end_date,
     more_information:this.more_information,
  }
  console.log(payload)
  var refresh=true
    this.router.navigateByUrl('installation_manager/liftcar_stage/'+refresh);
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/installation_page/'+refresh);
  }
}
