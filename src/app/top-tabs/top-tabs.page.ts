import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-top-tabs',
  templateUrl: './top-tabs.page.html',
  styleUrls: ['./top-tabs.page.scss'],
})
export class TopTabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
}
