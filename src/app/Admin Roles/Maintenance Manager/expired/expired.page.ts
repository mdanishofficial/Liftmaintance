import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-expired',
  templateUrl: './expired.page.html',
  styleUrls: ['./expired.page.scss'],
})
export class ExpiredPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  contract(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/contracts');
  }
  curmonth(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/curmonthexpiring');
  }
  expired(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/expired');
  }
}
