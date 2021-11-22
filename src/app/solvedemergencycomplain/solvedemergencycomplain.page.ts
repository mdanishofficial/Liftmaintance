import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-solvedemergencycomplain',
  templateUrl: './solvedemergencycomplain.page.html',
  styleUrls: ['./solvedemergencycomplain.page.scss'],
})
export class SolvedemergencycomplainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async solved(){
    this.router.navigateByUrl('/tabs/solvedemergencycomplain');
  }
  async pending(){
    this.router.navigateByUrl('/tabs/pendingemergencycomplain');
  }
  newcomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newpendingcomplain');
  }
}
