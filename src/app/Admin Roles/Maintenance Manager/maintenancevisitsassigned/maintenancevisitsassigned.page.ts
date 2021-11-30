import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenancevisitsassigned',
  templateUrl: './maintenancevisitsassigned.page.html',
  styleUrls: ['./maintenancevisitsassigned.page.scss'],
})
export class MaintenancevisitsassignedPage implements OnInit {

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
      selected:true
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
