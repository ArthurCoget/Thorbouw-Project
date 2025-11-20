import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advies } from './advies';

describe('Advies', () => {
  let component: Advies;
  let fixture: ComponentFixture<Advies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
