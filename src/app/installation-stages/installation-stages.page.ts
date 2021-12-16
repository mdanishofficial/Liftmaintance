import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-installation-stages',
  templateUrl: './installation-stages.page.html',
  styleUrls: ['./installation-stages.page.scss'],
})
export class InstallationStagesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  installation(){
    console.log('inside Installation')
    this.router.navigateByUrl('tabs/installation');
  }
  data=[
    {
      id:0,
      stage: "Rail and the Door",
      date: "Rail and the Door",
      status: "Rail and the Door",
      } ,
      {
      id:1,
      stage: "Rail and the Door",
      date: "Rail and the Door",
      status: "Rail and the Door",
    },
    {
      id:2,
      stage: "Rail and the Door",
      date: "Rail and the Door",
      status: "Rail and the Door",
    },
    {
      id:3,
      stage: "Rail and the Door",
      date: "Rail and the Door",
      status: "Rail and the Door",
    },
 ]
}
