import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-liftcar-stage',
  templateUrl: './liftcar-stage.page.html',
  styleUrls: ['./liftcar-stage.page.scss'],
})
export class LiftcarStagePage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  async next(){
    this.router.navigateByUrl('installation_manager/engine_stage');
  }
  back(){
    this.router.navigateByUrl('installation_manager/railanddoor_stage');
  }
}
