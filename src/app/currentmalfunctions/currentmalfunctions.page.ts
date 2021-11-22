import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-currentmalfunctions',
  templateUrl: './currentmalfunctions.page.html',
  styleUrls: ['./currentmalfunctions.page.scss'],
})
export class CurrentmalfunctionsPage implements OnInit {

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
