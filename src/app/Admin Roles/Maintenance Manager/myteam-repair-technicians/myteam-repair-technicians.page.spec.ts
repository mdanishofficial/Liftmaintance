import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyteamRepairTechniciansPage } from './myteam-repair-technicians.page';

describe('MyteamRepairTechniciansPage', () => {
  let component: MyteamRepairTechniciansPage;
  let fixture: ComponentFixture<MyteamRepairTechniciansPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamRepairTechniciansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyteamRepairTechniciansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
