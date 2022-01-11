import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentmalfunctionslistPage } from './currentmalfunctionslist.page';

describe('CurrentmalfunctionslistPage', () => {
  let component: CurrentmalfunctionslistPage;
  let fixture: ComponentFixture<CurrentmalfunctionslistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentmalfunctionslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentmalfunctionslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
