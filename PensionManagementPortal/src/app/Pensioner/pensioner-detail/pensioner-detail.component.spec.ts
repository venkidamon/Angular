import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerDetailComponent } from './pensioner-detail.component';

describe('PensionerDetailComponent', () => {
  let component: PensionerDetailComponent;
  let fixture: ComponentFixture<PensionerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
