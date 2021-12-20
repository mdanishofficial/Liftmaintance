import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-visitdetails',
  templateUrl: './visitdetails.page.html',
  styleUrls: ['./visitdetails.page.scss'],
})
export class VisitdetailsPage implements OnInit {

  constructor(private service: InstallationService, private router: Router) {
    let payload = {
      user_id: "123"
    }
    this.service.getmaintenance(payload).subscribe(res => {
      // for(var i=0;i<res.length;i++){
        this.maintenance_data = res;
        console.log(this.maintenance_data)
      // }
         })
  }
  ngOnInit() {
  }
  maintenance_data = [
    {
      maintenance_date:'2021-09-09'
    }
  ]
  back() {
    this.router.navigateByUrl('tabs/maintenancelist');
    }
}
