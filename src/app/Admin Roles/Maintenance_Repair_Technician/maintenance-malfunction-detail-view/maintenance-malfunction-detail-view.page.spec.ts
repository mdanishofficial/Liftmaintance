import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceMalfunctionDetailViewPage } from './maintenance-malfunction-detail-view.page';

describe('MaintenanceMalfunctionDetailViewPage', () => {
  let component: MaintenanceMalfunctionDetailViewPage;
  let fixture: ComponentFixture<MaintenanceMalfunctionDetailViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMalfunctionDetailViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceMalfunctionDetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
