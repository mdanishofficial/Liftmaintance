import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-newmalfunctions',
  templateUrl: './newmalfunctions.page.html',
  styleUrls: ['./newmalfunctions.page.scss'],
})
export class NewmalfunctionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  new(){
    this.router.navigateByUrl('tabs/adminroles/maintenancerepairtechnician/newmalfunctions');
  }
completed(){
  this.router.navigateByUrl('tabs/adminroles/maintenancerepairtechnician/completedmalfunctions');
}
}
