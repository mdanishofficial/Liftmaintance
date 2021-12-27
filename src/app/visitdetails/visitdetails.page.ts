import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-visitdetails',
  templateUrl: './visitdetails.page.html',
  styleUrls: ['./visitdetails.page.scss'],
})
export class VisitdetailsPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/maintenancelist');
    });
    let payload = {
      user_id: "123"
    }
    this.service.getmaintenance(payload).subscribe(res => {
      // for(var i=0;i<res.length;i++){
        this.maintenance_data = res;
        console.log(this.maintenance_data)
      // }
         })
         this.service.getrating(payload).subscribe(res => {
          this.technician_data = res;
       console.log(this.technician_data)
         })
  }
  ngOnInit() {
  }
  maintenance_data = [
    {
      maintenance_date:'2021-09-09'
    }
  ]
  technician_data
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
    }
  back() {
    this.router.navigateByUrl('tabs/maintenancelist');
    }
}
