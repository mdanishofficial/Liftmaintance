import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-clientlisting',
  templateUrl: './clientlisting.page.html',
  styleUrls: ['./clientlisting.page.scss'],
})
export class ClientlistingPage implements OnInit {

  constructor(private router: Router) { }

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
