import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightCelebsComponent } from './spotlight-celebs.component';

describe('SpotlightCelebsComponent', () => {
  let component: SpotlightCelebsComponent;
  let fixture: ComponentFixture<SpotlightCelebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightCelebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightCelebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
