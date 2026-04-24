import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveLeuvenMap } from './interactive-leuven-map';

describe('InteractiveLeuvenMap', () => {
  let component: InteractiveLeuvenMap;
  let fixture: ComponentFixture<InteractiveLeuvenMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveLeuvenMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveLeuvenMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
