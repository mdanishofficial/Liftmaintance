import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-repair-technicians',
  templateUrl: './repair-technicians.page.html',
  styleUrls: ['./repair-technicians.page.scss'],
})
export class RepairTechniciansPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationManagerServicesService,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
      });
    this.call_api()
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
  maintenancetechnician(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/maintenance_technicians/'+refresh);
  }
  repairtechnician(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/repair_technicians/'+refresh);
  }
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
    this.service.getMaintenanceRepairTechnicians().subscribe(res => {
      this.repair_technicians=res
      console.log(this.repair_technicians)
    })
  }
  repair_technicians=[]

}
