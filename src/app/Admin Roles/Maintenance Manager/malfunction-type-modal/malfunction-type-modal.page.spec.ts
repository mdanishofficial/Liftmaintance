import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalfunctionTypeModalPage } from './malfunction-type-modal.page';

describe('MalfunctionTypeModalPage', () => {
  let component: MalfunctionTypeModalPage;
  let fixture: ComponentFixture<MalfunctionTypeModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MalfunctionTypeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalfunctionTypeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
