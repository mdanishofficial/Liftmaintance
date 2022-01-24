import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-control-stage',
  templateUrl: './control-stage.page.html',
  styleUrls: ['./control-stage.page.scss'],
})
export class ControlStagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async next(){
    this.router.navigateByUrl('installation_manager/liftcar_stage');
  }
  back(){
    this.router.navigateByUrl('installation_manager/engine_stage');
  }

}
