import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsunassignedPage } from './maintenancevisitsunassigned.page';

describe('MaintenancevisitsunassignedPage', () => {
  let component: MaintenancevisitsunassignedPage;
  let fixture: ComponentFixture<MaintenancevisitsunassignedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancevisitsunassignedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancevisitsunassignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
