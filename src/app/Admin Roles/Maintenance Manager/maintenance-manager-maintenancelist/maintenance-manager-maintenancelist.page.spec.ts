import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerMaintenancelistPage } from './maintenance-manager-maintenancelist.page';

describe('MaintenanceManagerMaintenancelistPage', () => {
  let component: MaintenanceManagerMaintenancelistPage;
  let fixture: ComponentFixture<MaintenanceManagerMaintenancelistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceManagerMaintenancelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceManagerMaintenancelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
