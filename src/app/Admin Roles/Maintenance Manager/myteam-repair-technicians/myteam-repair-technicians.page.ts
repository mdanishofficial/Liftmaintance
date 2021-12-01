import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-myteam-repair-technicians',
  templateUrl: './myteam-repair-technicians.page.html',
  styleUrls: ['./myteam-repair-technicians.page.scss'],
})
export class MyteamRepairTechniciansPage implements OnInit {

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
