import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedmalfunctionsdetailsPage } from './solvedmalfunctionsdetails.page';

describe('SolvedmalfunctionsdetailsPage', () => {
  let component: SolvedmalfunctionsdetailsPage;
  let fixture: ComponentFixture<SolvedmalfunctionsdetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedmalfunctionsdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedmalfunctionsdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
