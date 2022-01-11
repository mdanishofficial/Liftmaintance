import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],

})
export class FaqsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  async inquiries(){
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs(){
    this.router.navigateByUrl('/tabs/faqs');
  }
  panels = [
    
    {
      active: true,
      disabled: false,
      name: 'Donec vel magna et nulla porta laoreet.',
      description:'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size':'16px',
        color:'#6E6E6E',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'Ut luctus sodales ante, quis aliquam',
      icon: 'right',
      description:'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
     customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size':'16px',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'nibh erat convallis nisl',
      icon: 'right',
      description:'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
   customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size':'16px',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'Duis justo nisi, suscipit vel quam eleifend, ',
      icon: 'right',
      description:'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
    customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size':'16px',
      }
    },
    {
      active: false,
      disabled: false,
      name: 'aliquam tempus risus. Vestibulum hendrerit',
      icon: 'right',
      description:'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
   customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        color:'white',
        'margin-top': '-2em',
        'font-size':'16px',
      }
    }
  ];
}
