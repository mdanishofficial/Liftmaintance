import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.page.html',
  styleUrls: ['./clientdetails.page.scss'],
})
export class ClientdetailsPage implements OnInit {

 
  constructor(public activatedRoute: ActivatedRoute,private service: InstallationManagerServicesService, private platform: Platform,private router: Router) { 
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/clientlisting/'+refresh);
    });
    this.call_api()
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  sub
  id
  call_api(){
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/clientlisting/'+refresh);
    });
    this.service.getclients().subscribe(res => {
      this.clients=res
      console.log(this.clients)

    })
  }
  clients=[]
  previous_contract_data=[
    {
client_name:'Shadab Khan',
lift_number:'6',
start_date:'10-10-2022',
end_date:'10-10-2022',
price:'1600 Riyals'
    }
  ]
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/clientlisting/'+refresh);
  }
}
