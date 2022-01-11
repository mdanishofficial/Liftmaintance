import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-solvedmalfunctionslist',
  templateUrl: './solvedmalfunctionslist.page.html',
  styleUrls: ['./solvedmalfunctionslist.page.scss'],
})
export class SolvedmalfunctionslistPage implements OnInit {

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
}
