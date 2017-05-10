import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelawanComponent } from './relawan.component';

describe('RelawanComponent', () => {
  let component: RelawanComponent;
  let fixture: ComponentFixture<RelawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
