import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancevisitsnotvisitsPage } from './maintenancevisitsnotvisits.page';

describe('MaintenancevisitsnotvisitsPage', () => {
  let component: MaintenancevisitsnotvisitsPage;
  let fixture: ComponentFixture<MaintenancevisitsnotvisitsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancevisitsnotvisitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancevisitsnotvisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
