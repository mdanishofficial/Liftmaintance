import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-malfunctionslist',
  templateUrl: './malfunctionslist.page.html',
  styleUrls: ['./malfunctionslist.page.scss'],
})
export class MalfunctionslistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async malfunctions(){
    this.router.navigateByUrl('/tabs/malfunctionslist');
  }
  async currentmalfunctions(){
    this.router.navigateByUrl('/tabs/currentmalfunctionslist');
  }
}
