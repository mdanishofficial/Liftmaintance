import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-upcomingvisits',
  templateUrl: './upcomingvisits.page.html',
  styleUrls: ['./upcomingvisits.page.scss'],
})
export class UpcomingvisitsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  today(){
    this.router.navigateByUrl('tabs/adminroles/maintenancetechnician/todaysvisits');
  }
  upcoming(){
    this.router.navigateByUrl('tabs/adminroles/maintenancetechnician/upcomingvisits');
  }
  previous(){
    this.router.navigateByUrl('tabs/adminroles/maintenancetechnician/previousvisits');
  }

}
