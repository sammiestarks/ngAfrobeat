import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsSquareAComponent } from './adverts-square-a.component';

describe('AdvertsSquareAComponent', () => {
  let component: AdvertsSquareAComponent;
  let fixture: ComponentFixture<AdvertsSquareAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsSquareAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsSquareAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
