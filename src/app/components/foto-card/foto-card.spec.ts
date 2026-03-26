import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoCard } from './foto-card';

describe('FotoCard', () => {
  let component: FotoCard;
  let fixture: ComponentFixture<FotoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
