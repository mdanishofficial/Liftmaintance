import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForwardmalfunctionsModalPage } from './forwardmalfunctions-modal.page';

describe('ForwardmalfunctionsModalPage', () => {
  let component: ForwardmalfunctionsModalPage;
  let fixture: ComponentFixture<ForwardmalfunctionsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardmalfunctionsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForwardmalfunctionsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
