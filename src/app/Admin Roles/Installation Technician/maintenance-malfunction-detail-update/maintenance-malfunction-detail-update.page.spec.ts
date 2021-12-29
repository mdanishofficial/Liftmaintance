import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceMalfunctionDetailUpdatePage } from './maintenance-malfunction-detail-update.page';

describe('MaintenanceMalfunctionDetailUpdatePage', () => {
  let component: MaintenanceMalfunctionDetailUpdatePage;
  let fixture: ComponentFixture<MaintenanceMalfunctionDetailUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMalfunctionDetailUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceMalfunctionDetailUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
