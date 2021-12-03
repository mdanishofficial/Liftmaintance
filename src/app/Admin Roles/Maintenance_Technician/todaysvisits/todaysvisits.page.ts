import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-todaysvisits',
  templateUrl: './todaysvisits.page.html',
  styleUrls: ['./todaysvisits.page.scss'],
})
export class TodaysvisitsPage implements OnInit {

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
