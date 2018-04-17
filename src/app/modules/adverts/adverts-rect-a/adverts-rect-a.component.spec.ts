import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsRectAComponent } from './adverts-rect-a.component';

describe('AdvertsRectAComponent', () => {
  let component: AdvertsRectAComponent;
  let fixture: ComponentFixture<AdvertsRectAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsRectAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsRectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
