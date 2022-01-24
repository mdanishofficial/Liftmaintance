import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-curmonthexpiring',
  templateUrl: './curmonthexpiring.page.html',
  styleUrls: ['./curmonthexpiring.page.scss'],
})
export class CurmonthexpiringPage implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  contracts=[
   
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },  {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    }
  ]
  contract(){
    this.router.navigateByUrl('installation_manager/contracts');
  }
  contractdetails(){
    this.router.navigateByUrl('installation_manager/contractdetails');
  }
  curmonth(){
    this.router.navigateByUrl('installation_manager/curmonthexpiring');
  }
  expired(){
    this.router.navigateByUrl('installation_manager/expired');
  }
  async back(){
    this.router.navigateByUrl('installation_manager/myclient');
  }
}
