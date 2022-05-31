import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    private service: InstallationManagerServicesService,
    private platform: Platform,
    private router: Router
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
    this.call_api();
  }

  ngOnInit() {
    console.log('Inside Ng On INit');
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.refresh = params['refresh'];
      console.log(this.refresh);
      if (this.refresh == 'true') {
        console.log('Refresh is True');
        this.call_api();
      }
    });
  }
  sub;
  refresh;

  
  call_api() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
    this.service.getallinstallations().subscribe((res) => {
      this.installation_data = res;
    });
  }


  installation_page(id) {
    this.router.navigateByUrl('installation_manager/installation_page/' + id);
  }

  installation_data = [];
  //   installation_data=[
  //     {
  //       client_name:'Ahmad Gul',
  //        location:'New City',
  //        installation_level:'Level-1',
  //        installation_status:'Pending Payment'
  //   },
  //   {
  //     client_name:'Shadab Khan',
  //      location:'New City',
  //      installation_level:'Level-2',
  //      installation_status:'Pending Payment'
  // },
  // {
  //   client_name:'Hassan Ali',
  //    location:'New City',
  //    installation_level:'Level-3',
  //    installation_status:'Installing'
  // }
  //   ]
}
