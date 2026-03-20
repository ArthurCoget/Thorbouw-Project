import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleTextInfo } from './triple-text-info';

describe('TripleTextInfo', () => {
  let component: TripleTextInfo;
  let fixture: ComponentFixture<TripleTextInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleTextInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripleTextInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
