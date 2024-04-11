import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinServicesComponent } from './fin-services.component';

describe('FinServicesComponent', () => {
  let component: FinServicesComponent;
  let fixture: ComponentFixture<FinServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinServicesComponent]
    });
    fixture = TestBed.createComponent(FinServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
