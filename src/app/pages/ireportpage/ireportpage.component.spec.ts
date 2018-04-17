import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IreportpageComponent } from './ireportpage.component';

describe('IreportpageComponent', () => {
  let component: IreportpageComponent;
  let fixture: ComponentFixture<IreportpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IreportpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IreportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
