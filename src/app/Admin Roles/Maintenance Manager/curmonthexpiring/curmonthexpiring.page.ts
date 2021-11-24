import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-curmonthexpiring',
  templateUrl: './curmonthexpiring.page.html',
  styleUrls: ['./curmonthexpiring.page.scss'],
})
export class CurmonthexpiringPage implements OnInit {

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
