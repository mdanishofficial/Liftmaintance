import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-malfunctionslist',
  templateUrl: './malfunctionslist.page.html',
  styleUrls: ['./malfunctionslist.page.scss'],
})
export class MalfunctionslistPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getsolvedmalfunctions(payload).subscribe(res => {
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
  malfunction_details(id){
    this.router.navigateByUrl('detailed_current_malfunctions/'+id);
  }
}
