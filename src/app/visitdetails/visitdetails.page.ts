import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-visitdetails',
  templateUrl: './visitdetails.page.html',
  styleUrls: ['./visitdetails.page.scss'],
})
export class VisitdetailsPage implements OnInit {
  state$: Observable<object>;
 
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/maintenancelist');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getmaintenance(payload).subscribe(res => {
      // for(var i=0;i<res.length;i++){
        this.maintenance_data = res;
        // }
        console.log(this.maintenance_data)
         })
         this.service.getrating(payload).subscribe(res => {
          this.technician_data = res;
        })
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
     this.id = params['id'];
     });
     }
   sub
   id
  maintenance_data = []
  technician_data
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
    }
  back() {
    this.router.navigateByUrl('tabs/maintenancelist');
    }
}
