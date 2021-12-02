import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalfunctionLevelModalPage } from './malfunction-level-modal.page';

describe('MalfunctionLevelModalPage', () => {
  let component: MalfunctionLevelModalPage;
  let fixture: ComponentFixture<MalfunctionLevelModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MalfunctionLevelModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalfunctionLevelModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
