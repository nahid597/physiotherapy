import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchExapleComponent } from './show-search-exaple.component';

describe('ShowSearchExapleComponent', () => {
  let component: ShowSearchExapleComponent;
  let fixture: ComponentFixture<ShowSearchExapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSearchExapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSearchExapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
