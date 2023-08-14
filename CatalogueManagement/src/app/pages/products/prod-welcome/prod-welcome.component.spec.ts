import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdWelcomeComponent } from './prod-welcome.component';

describe('ProdWelcomeComponent', () => {
  let component: ProdWelcomeComponent;
  let fixture: ComponentFixture<ProdWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
