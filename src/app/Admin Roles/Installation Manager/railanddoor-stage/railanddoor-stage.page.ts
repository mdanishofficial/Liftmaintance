import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-railanddoor-stage',
  templateUrl: './railanddoor-stage.page.html',
  styleUrls: ['./railanddoor-stage.page.scss'],
})
export class RailanddoorStagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async next(){
    this.router.navigateByUrl('installation_manager/liftcar_stage');
  }
  back(){
    this.router.navigateByUrl('installation_manager/installation_page');
  }
}
