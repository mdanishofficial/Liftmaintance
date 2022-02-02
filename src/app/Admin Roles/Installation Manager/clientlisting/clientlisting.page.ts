import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../../../services/main.service';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clientlisting',
  templateUrl: './clientlisting.page.html',
  styleUrls: ['./clientlisting.page.scss'],
})
export class ClientlistingPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private platform: Platform, private service: InstallationService, private router: Router, public modalController: ModalController) {
  var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
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
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
    });
  }
  back(){
    var refresh=true
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
  }
  clientdetails(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/clientdetails/'+refresh);
  }
  clients=[
   
    {
      client_name:'Shadab Khan',
      location:'New City'
    },  {
      client_name:'Shadab Khan',
      location:'New City'
    },
    {
      client_name:'Shadab Khan',
      location:'New City'
    },
    {
      client_name:'Shadab Khan',
      location:'New City'
    }
  ]
}
