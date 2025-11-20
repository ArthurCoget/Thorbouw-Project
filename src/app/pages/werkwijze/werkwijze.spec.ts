import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Werkwijze } from './werkwijze';

describe('Werkwijze', () => {
  let component: Werkwijze;
  let fixture: ComponentFixture<Werkwijze>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Werkwijze]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Werkwijze);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
