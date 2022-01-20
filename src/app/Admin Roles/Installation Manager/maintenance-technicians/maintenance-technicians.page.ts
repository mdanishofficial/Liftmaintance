import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-maintenance-technicians',
  templateUrl: './maintenance-technicians.page.html',
  styleUrls: ['./maintenance-technicians.page.scss'],
})
export class MaintenanceTechniciansPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  maintenancetechnician(){
    this.router.navigateByUrl('installation_manager/maintenance_technicians');
  }
  repairtechnician(){
    this.router.navigateByUrl('installation_manager/repair_technicians');
  }
}
