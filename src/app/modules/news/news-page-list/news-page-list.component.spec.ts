import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageListComponent } from './news-page-list.component';

describe('NewsPageListComponent', () => {
  let component: NewsPageListComponent;
  let fixture: ComponentFixture<NewsPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
