import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailedSolvedMalfunctionsPage } from './detailed-solved-malfunctions.page';

describe('DetailedSolvedMalfunctionsPage', () => {
  let component: DetailedSolvedMalfunctionsPage;
  let fixture: ComponentFixture<DetailedSolvedMalfunctionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedSolvedMalfunctionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedSolvedMalfunctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
