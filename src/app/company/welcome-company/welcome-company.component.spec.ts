import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCompanyComponent } from './welcome-company.component';

describe('WelcomeCompanyComponent', () => {
  let component: WelcomeCompanyComponent;
  let fixture: ComponentFixture<WelcomeCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
