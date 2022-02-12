import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-clientlisting',
  templateUrl: './clientlisting.page.html',
  styleUrls: ['./clientlisting.page.scss'],
})
export class ClientlistingPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private platform: Platform, private service: InstallationManagerServicesService, private router: Router, public modalController: ModalController) {
  var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
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
  call_api(){
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
    });
    this.service.getclients().subscribe(res => {
      this.clients=res
      console.log(this.clients)

    })
  }
  clients
  back(){
    var refresh=true
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
  }
  clientdetails(id){
    this.router.navigateByUrl('installation_manager/clientdetails/'+id);
  }
  // clients=[
   
  //   {
  //     client_name:'Shadab Khan',
  //     location:'New City'
  //   },  {
  //     client_name:'Shadab Khan',
  //     location:'New City'
  //   },
  //   {
  //     client_name:'Shadab Khan',
  //     location:'New City'
  //   },
  //   {
  //     client_name:'Shadab Khan',
  //     location:'New City'
  //   }
  // ]
}
