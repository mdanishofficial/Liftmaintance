import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-installation',
  templateUrl: './installation.page.html',
  styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // // $('.datepicker').datepicker({
    // //   inline: true
    // // });
    // console.log($('.datepicker'))
  }
  ngAfterInit(){
     $('.datepicker').datepicker({
      inline: true
    });
  }
 
}
