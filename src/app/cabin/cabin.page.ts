import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.page.html',
  styleUrls: ['./cabin.page.scss'],
})
export class CabinPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
    let payload = {
    cabin_id: '642766',
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
  this.router.navigateByUrl('tabs/installation_stages');
  }
  
}
