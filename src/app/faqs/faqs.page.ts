import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],

})
export class FaqsPage implements OnInit {
  public isCollapsed: boolean[] = [];

  constructor(private service: InstallationService, private platform: Platform, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
 this.call_api()
  }

  ngOnInit() {
  }
  call_api() {
    this.service.getfaqs().subscribe(res => {
      this.faqs_data = res
      console.log(res)
      for (var i = 0; i < this.faqs_data.length; i++) {
        this.isCollapsed[i] = true
      }
    })
  }
  faqs_data = []

  selected = []
  changeselected(id) {
    for (var i = 0; i < this.faqs_data.length; i++) {
      this.selected[i] = false
    }
    this.selected[id] = true
    console.log(this.selected)
  }
  notifications() {
    this.router.navigateByUrl('tabs/notifications');
  }
  async inquiries() {
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs() {
    this.router.navigateByUrl('/tabs/faqs');
  }
  panels = [

    {
      active: true,
      disabled: false,
      name: 'Donec vel magna et nulla porta laoreet.',
      description: 'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size': '16px',
        color: '#6E6E6E',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'Ut luctus sodales ante, quis aliquam',
      icon: 'right',
      description: 'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size': '16px',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'nibh erat convallis nisl',
      icon: 'right',
      description: 'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size': '16px',
      }
    },
    {
      active: false,
      disabled: true,
      name: 'Duis justo nisi, suscipit vel quam eleifend, ',
      icon: 'right',
      description: 'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        'margin-top': '-2em',
        'font-size': '16px',
      }
    },
    {
      active: false,
      disabled: false,
      name: 'aliquam tempus risus. Vestibulum hendrerit',
      icon: 'right',
      description: 'Donec vel magna et nulla porta laoreet. Pellentesque sed tortor ex. Ut luctus sodales ante, quis aliquam libero efficitur sit amet. In sodales pellentesque venenatis. Cras mattis suscipit diam, et aliquet metus vehicula non. Ut at rutrum nunc. Fusce lobortis, turpis ac interdum blandit, purus dui blandit justo',
      customStyle: {
        background: '#FCFCFC',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
        color: 'white',
        'margin-top': '-2em',
        'font-size': '16px',
      }
    }
  ];
}
