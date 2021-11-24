import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceManagerSolvedmalfunctionslistPage } from './maintenance-manager-solvedmalfunctionslist.page';

describe('MaintenanceManagerSolvedmalfunctionslistPage', () => {
  let component: MaintenanceManagerSolvedmalfunctionslistPage;
  let fixture: ComponentFixture<MaintenanceManagerSolvedmalfunctionslistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceManagerSolvedmalfunctionslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceManagerSolvedmalfunctionslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
