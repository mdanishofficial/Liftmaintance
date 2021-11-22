import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pendingemergencycomplain',
  templateUrl: './pendingemergencycomplain.page.html',
  styleUrls: ['./pendingemergencycomplain.page.scss'],
})
export class PendingemergencycomplainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async solved(){
    this.router.navigateByUrl('/tabs/solvedemergencycomplain');
  }
  async pending(){
    this.router.navigateByUrl('/tabs/pendingemergencycomplain');
  }
  newemergencycomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newemergencycomplain');
  }
}
