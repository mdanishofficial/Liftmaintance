import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
// date='Sunday, 23-03-2020'
client_name='Ahmad Gul'
contact='03331234567'
city='Dubai'
building_type='Residential'
lifts=[{code:'lift1231',Lift_Type:'Food Lift',Door_Type:'Auto Door', Total_Stops:7},
{code:'lift4781',Lift_Type:'Food Lift',Door_Type:'Manual Door', Total_Stops:10}]
no_of_lifts=this.lifts.length
maintenance_start_date='20-12-2020'
maintenance_end_date='20-12-2020'


}
