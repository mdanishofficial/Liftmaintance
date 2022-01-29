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
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient');
    });
  }

  ngOnInit() {
  }
  back(){
      this.router.navigateByUrl('installation_manager/myclient');
  }
  clientdetails(){
    this.router.navigateByUrl('installation_manager/clientdetails');
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
