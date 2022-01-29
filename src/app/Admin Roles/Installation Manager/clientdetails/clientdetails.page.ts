import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.page.html',
  styleUrls: ['./clientdetails.page.scss'],
})
export class ClientdetailsPage implements OnInit {

 
  constructor(private platform: Platform,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/clientlisting');
    });
  }

  ngOnInit() {
  }
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
    this.router.navigateByUrl('installation_manager/clientlisting');
  }
}
