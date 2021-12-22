import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-currentmalfunctions',
  templateUrl: './currentmalfunctions.page.html',
  styleUrls: ['./currentmalfunctions.page.scss'],
})
export class CurrentmalfunctionsPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    let payload = {
      user_id: "123"
    }
    this.service.getcurrentmalfunctions(payload).subscribe(res => {
     this.malfunction_data = res;
  console.log(this.malfunction_data)
    })
  }
  
  ngOnInit() {
  }
  malfunction_data = []
  async malfunctions(){
    this.router.navigateByUrl('/tabs/malfunctionslist');
  }
  async currentmalfunctions(){
    this.router.navigateByUrl('/tabs/currentmalfunctionslist');
  }
  async currentmalfunction_details(){
    this.router.navigateByUrl('/tabs/detailed_current_malfunctions');
  }
  }
