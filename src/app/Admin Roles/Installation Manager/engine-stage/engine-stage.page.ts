import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-engine-stage',
  templateUrl: './engine-stage.page.html',
  styleUrls: ['./engine-stage.page.scss'],
})
export class EngineStagePage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  async next(){
    this.router.navigateByUrl('installation_manager/control_stage');
  }
  async back(){
    this.router.navigateByUrl('installation_manager/liftcar_stage');
  }
}
