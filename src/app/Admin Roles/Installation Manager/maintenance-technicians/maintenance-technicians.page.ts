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
  maintenance_technicians=[
    {
      technician_name:'Shadab Khan',
      technician_avatar:'https://forum.processmaker.com/download/file.php?avatar=93310_1550846185.png'
    },
    {
      technician_name:'Hassan Ali',
      technician_avatar:'https://forum.processmaker.com/download/file.php?avatar=93310_1550846185.png'
    },
    {
      technician_name:'Ahmad Gul',
      technician_avatar:'https://forum.processmaker.com/download/file.php?avatar=93310_1550846185.png'
    }
  ]
}
