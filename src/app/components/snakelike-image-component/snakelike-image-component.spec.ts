import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakelikeImageComponent } from './snakelike-image-component';

describe('SnakelikeImageComponent', () => {
  let component: SnakelikeImageComponent;
  let fixture: ComponentFixture<SnakelikeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakelikeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakelikeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
