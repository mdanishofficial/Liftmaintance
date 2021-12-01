import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatepickerMaintenanceVisitsPage } from './datepicker-maintenance-visits.page';

describe('DatepickerMaintenanceVisitsPage', () => {
  let component: DatepickerMaintenanceVisitsPage;
  let fixture: ComponentFixture<DatepickerMaintenanceVisitsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMaintenanceVisitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerMaintenanceVisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
