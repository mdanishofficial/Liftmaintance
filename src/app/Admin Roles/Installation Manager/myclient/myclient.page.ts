import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-myclient',
  templateUrl: './myclient.page.html',
  styleUrls: ['./myclient.page.scss'],
})
export class MyclientPage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
   }

  ngOnInit() {
  }
  clientlisting(){
    this.router.navigateByUrl('installation_manager/clientlisting');
  }
  contracts(){
    this.router.navigateByUrl('installation_manager/contracts');
  }
}
