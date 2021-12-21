import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { detailed_current_malfunctionsPage } from './detailed_current_malfunctions.page';

describe('detailed_current_malfunctionsPage', () => {
  let component: detailed_current_malfunctionsPage;
  let fixture: ComponentFixture<detailed_current_malfunctionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [detailed_current_malfunctionsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(detailed_current_malfunctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
