import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebpageComponent } from './celebpage.component';

describe('CelebpageComponent', () => {
  let component: CelebpageComponent;
  let fixture: ComponentFixture<CelebpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
