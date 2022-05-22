import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerHomeComponent } from './pensioner-home.component';

describe('PensionerHomeComponent', () => {
  let component: PensionerHomeComponent;
  let fixture: ComponentFixture<PensionerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
