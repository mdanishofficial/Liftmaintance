import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsassignedPage } from './maintenancevisitsassigned.page';

describe('MaintenancevisitsassignedPage', () => {
  let component: MaintenancevisitsassignedPage;
  let fixture: ComponentFixture<MaintenancevisitsassignedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancevisitsassignedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancevisitsassignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
