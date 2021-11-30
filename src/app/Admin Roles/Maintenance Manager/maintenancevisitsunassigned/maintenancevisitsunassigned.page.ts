import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenancevisitsunassigned',
  templateUrl: './maintenancevisitsunassigned.page.html',
  styleUrls: ['./maintenancevisitsunassigned.page.scss'],
})
export class MaintenancevisitsunassignedPage implements OnInit {

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
      selected:true,
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
