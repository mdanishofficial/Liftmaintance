import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstallationManagerInquiriesPage } from './installation-manager-inquiries.page';

describe('InstallationManagerInquiriesPage', () => {
  let component: InstallationManagerInquiriesPage;
  let fixture: ComponentFixture<InstallationManagerInquiriesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationManagerInquiriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationManagerInquiriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
