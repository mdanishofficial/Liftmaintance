import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-maintenance-technicians',
  templateUrl: './maintenance-technicians.page.html',
  styleUrls: ['./maintenance-technicians.page.scss'],
})
export class MaintenanceTechniciansPage implements OnInit {
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
   }

   ngOnInit() {
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          this.call_api()
        }
      });
     }
      sub
      refresh
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
  }
  maintenancetechnician(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/maintenance_technicians/'+refresh);
  }
  repairtechnician(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/repair_technicians/'+refresh);
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
