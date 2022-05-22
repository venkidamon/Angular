import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerCreateComponent } from './pensioner-create.component';

describe('PensionerCreateComponent', () => {
  let component: PensionerCreateComponent;
  let fixture: ComponentFixture<PensionerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
