import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGatoComponent } from './form-gato.component';

describe('FormGatoComponent', () => {
  let component: FormGatoComponent;
  let fixture: ComponentFixture<FormGatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
