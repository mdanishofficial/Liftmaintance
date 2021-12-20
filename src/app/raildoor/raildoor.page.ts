import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-raildoor',
  templateUrl: './raildoor.page.html',
  styleUrls: ['./raildoor.page.scss'],
})
export class RaildoorPage implements OnInit {
  railanddoor_data=[]
  constructor(private http: HttpClient, private service: InstallationService, private router: Router) {
    let payload = {
      railanddoor_id: "a84edc",
    }
    this.service.getrailanddoor(payload).subscribe(res => {
      // console.log(res)
      this.railanddoor_data = res;
      console.log(this.railanddoor_data[0].door_dressing)
      this.form[0].isChecked = this.railanddoor_data[0].ten_meter_long_rail
      this.form[1].isChecked = this.railanddoor_data[0].door_type_auto
      this.form[2].isChecked = this.railanddoor_data[0].rail_thickness_9ml
      this.form[3].isChecked = this.railanddoor_data[0].machine
      this.form[4].isChecked = this.railanddoor_data[0].cables
      this.form[5].isChecked = this.railanddoor_data[0].hilti
      this.form[6].isChecked = this.railanddoor_data[0].sportina
      this.form[7].isChecked = this.railanddoor_data[0].angles
      this.form[8].isChecked = this.railanddoor_data[0].doors_all_round
      this.form[9].isChecked = this.railanddoor_data[0].door_dressing
  })
  }
ngOnInit() {
  }
  public form = [
    { val: '10 Meter long rail' },
    { val: 'Door Type Auto'},
    { val: 'Rail thickness 9ml'},
    { val: 'Machine Name'},
    { val: 'Cables'},
    { val: 'Hilti'},
    { val: 'Sportina'},
    { val: 'Angles'},
    { val: 'Doors all round'},
    { val: 'Doors Dressing', isChecked: false }
  ];
 back(){
  this.router.navigateByUrl('tabs/installation_stages');
 }
}
