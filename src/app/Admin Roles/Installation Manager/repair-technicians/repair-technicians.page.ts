import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-repair-technicians',
  templateUrl: './repair-technicians.page.html',
  styleUrls: ['./repair-technicians.page.scss'],
})
export class RepairTechniciansPage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
   }

  ngOnInit() {
  }
  maintenancetechnician(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/maintenance_technicians/'+refresh);
  }
  repairtechnician(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/repair_technicians/'+refresh);
  }
  repair_technicians=[
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
