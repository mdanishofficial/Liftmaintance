import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-completedmalfunctions',
  templateUrl: './completedmalfunctions.page.html',
  styleUrls: ['./completedmalfunctions.page.scss'],
})
export class CompletedmalfunctionsPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
  new(){
    this.router.navigateByUrl('tabs/adminroles/installationtechnician/newmalfunctions');
  }
completed(){
  this.router.navigateByUrl('tabs/adminroles/installationtechnician/completedmalfunctions');
}
}
