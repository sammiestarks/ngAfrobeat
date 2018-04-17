import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSlabComponent } from './tv-slab.component';

describe('TvSlabComponent', () => {
  let component: TvSlabComponent;
  let fixture: ComponentFixture<TvSlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
