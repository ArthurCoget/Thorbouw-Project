import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRousel } from './text-rousel';

describe('TextRousel', () => {
  let component: TextRousel;
  let fixture: ComponentFixture<TextRousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
