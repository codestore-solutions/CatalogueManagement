import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantComponent } from './variant.component';

describe('VariantComponent', () => {
  let component: VariantComponent;
  let fixture: ComponentFixture<VariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantComponent]
    });
    fixture = TestBed.createComponent(VariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
