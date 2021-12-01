import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-myteam-maintenance-technicians',
  templateUrl: './myteam-maintenance-technicians.page.html',
  styleUrls: ['./myteam-maintenance-technicians.page.scss'],
})
export class MyteamMaintenanceTechniciansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  maintenancetechnician(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/myteam-maintenance-technicians');
  }
  repairtechnician(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/myteam-repair-technicians');
  }
}
