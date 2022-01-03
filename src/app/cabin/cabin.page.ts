import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.page.html',
  styleUrls: ['./cabin.page.scss'],
})
export class CabinPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/installation_stages/'+refresh);
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getcabin(payload).subscribe(res => {
      this.cab_data = res;
   this.data[0].cabin_dimensions=this.cab_data[0].cabin_dimensions
   this.data[0].cabin_shape=this.cab_data[0].cabin_shape
   this.data[0].cabin_roof=this.cab_data[0].cabin_roof
  })
  }
  ngOnInit() {
  }
  cab_data=[]
  public data = [
{
  cabin_dimensions:'Cabin_dimensions',
  cabin_shape:'Cabin Shape',
  cabin_roof:'Cabin Roof'
}
  ]
  back() {
    var refresh=true
  this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
  
}
