import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-previousvisits',
  templateUrl: './previousvisits.page.html',
  styleUrls: ['./previousvisits.page.scss'],
})
export class PreviousvisitsPage implements OnInit {

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
