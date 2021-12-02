import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-datepicker-maintenance-visits',
  templateUrl: './datepicker-maintenance-visits.page.html',
  styleUrls: ['./datepicker-maintenance-visits.page.scss'],
})
export class DatepickerMaintenanceVisitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  model: NgbDateStruct;
  visits=[
    {
      id:0,
      title: "All Visits",
      selected:true,
      } ,
      {
      id:1,
      title: "Assigned",
      selected:false
    },
    {
      id:2,
      title: "Unassigned",
      selected:false,
      } ,
      {
      id:3,
      title: "Not Visits",
      selected:false
    }
  ]
   setSelectedvisits(id){
    for(var i=0;i<this.visits.length;i++){
this.visits[i].selected=false
    }
   var objIndex = this.visits.findIndex((obj => obj.id == id));
   this.visits[objIndex].selected=true
   }
}
