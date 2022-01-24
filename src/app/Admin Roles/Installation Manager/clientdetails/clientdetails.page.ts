import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.page.html',
  styleUrls: ['./clientdetails.page.scss'],
})
export class ClientdetailsPage implements OnInit {

 
  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
  async back(){
    this.router.navigateByUrl('installation_manager/clientlisting');
  }
}
