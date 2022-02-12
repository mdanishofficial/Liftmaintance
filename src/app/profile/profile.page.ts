import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
     });
     this.call_api()
  }

  ngOnInit() {
  }
  call_api(){
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
   this.service.getprofile(payload).subscribe(res => {
          this.profile_data=res
          console.log(this.profile_data)

        })
  }
// date='Sunday, 23-03-2020'
profile_data=[]
client_name='Ahmad Gul'
contact='03331234567'
city='Dubai'
building_type='Residential'
lifts=[{code:'lift1231',Lift_Type:'Food Lift',Door_Type:'Auto Door', Total_Stops:7},
{code:'lift4781',Lift_Type:'Food Lift',Door_Type:'Manual Door', Total_Stops:10}]
no_of_lifts=this.lifts.length
maintenance_start_date='20-12-2020'
maintenance_end_date='20-12-2020'
logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
}

}
