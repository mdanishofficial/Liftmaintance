import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedemergencycomplainPage } from './solvedemergencycomplain.page';

describe('SolvedemergencycomplainPage', () => {
  let component: SolvedemergencycomplainPage;
  let fixture: ComponentFixture<SolvedemergencycomplainPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedemergencycomplainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedemergencycomplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
