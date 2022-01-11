import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedmalfunctionslistPage } from './solvedmalfunctionslist.page';

describe('SolvedmalfunctionslistPage', () => {
  let component: SolvedmalfunctionslistPage;
  let fixture: ComponentFixture<SolvedmalfunctionslistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedmalfunctionslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedmalfunctionslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
