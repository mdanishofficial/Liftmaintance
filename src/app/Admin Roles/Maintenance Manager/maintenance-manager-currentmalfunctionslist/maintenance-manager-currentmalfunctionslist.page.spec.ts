import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerCurrentmalfunctionslistPage } from './maintenance-manager-currentmalfunctionslist.page';

describe('MaintenanceManagerCurrentmalfunctionslistPage', () => {
  let component: MaintenanceManagerCurrentmalfunctionslistPage;
  let fixture: ComponentFixture<MaintenanceManagerCurrentmalfunctionslistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceManagerCurrentmalfunctionslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceManagerCurrentmalfunctionslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
