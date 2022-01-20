import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-currentmalfunctionslist',
  templateUrl: './currentmalfunctionslist.page.html',
  styleUrls: ['./currentmalfunctionslist.page.scss'],
})
export class CurrentmalfunctionslistPage implements OnInit {

  constructor(private platform: Platform,private router: Router) { 
  }
  ngOnInit() {
  }
async solved(){
  this.router.navigateByUrl('installation_manager/solvedmalfunctionslist');
}
async current(){
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist');
}
malfunction_details(){
  this.router.navigateByUrl('installation_manager/malfunction_details');
}
}
