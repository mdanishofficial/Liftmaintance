import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenancevisitsnotvisits',
  templateUrl: './maintenancevisitsnotvisits.page.html',
  styleUrls: ['./maintenancevisitsnotvisits.page.scss'],
})
export class MaintenancevisitsnotvisitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visits=[
    {
      id:0,
      title: "All Visits",
      selected:false,
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
      selected:true
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
