import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeImagesComponent } from './three-images-component';

describe('ThreeImagesComponent', () => {
  let component: ThreeImagesComponent;
  let fixture: ComponentFixture<ThreeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
