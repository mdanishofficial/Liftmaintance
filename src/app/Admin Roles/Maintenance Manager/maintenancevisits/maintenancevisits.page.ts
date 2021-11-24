import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenancevisits',
  templateUrl: './maintenancevisits.page.html',
  styleUrls: ['./maintenancevisits.page.scss'],
})
export class MaintenancevisitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  months=[
    {
      id:0,
      title: "Jan",
      selected:false,
      } ,
      {
      id:1,
      title: "Feb",
      selected:false
    },
    {
      id:2,
      title: "Mar",
      selected:true,
      } ,
      {
      id:3,
      title: "Apr",
      selected:false
    },
    {
      id:4,
      title: "May",
      selected:false,
      } ,
      {
      id:5,
      title: "Jun",
      selected:false
    },
    {
      id:6,
      title: "Jul",
      selected:false,
      } ,
      {
      id:7,
      title: "Aug",
      selected:false
    },
    {
      id:8,
      title: "Sep",
      selected:false,
      } ,
      {
      id:9,
      title: "Oct",
      selected:false
    },
    {
      id:10,
      title: "Nov",
      selected:false,
      } ,
      {
      id:11,
      title: "Dec",
      selected:false
    },
  ]
  setSelectedmonth(id){
    for(var i=0;i<this.months.length;i++){
this.months[i].selected=false
    }
   var objIndex = this.months.findIndex((obj => obj.id == id));
   this.months[objIndex].selected=true
   }
   
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
  