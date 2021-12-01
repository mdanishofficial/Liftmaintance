import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyteamMaintenanceTechniciansPage } from './myteam-maintenance-technicians.page';

describe('MyteamMaintenanceTechniciansPage', () => {
  let component: MyteamMaintenanceTechniciansPage;
  let fixture: ComponentFixture<MyteamMaintenanceTechniciansPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamMaintenanceTechniciansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyteamMaintenanceTechniciansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
