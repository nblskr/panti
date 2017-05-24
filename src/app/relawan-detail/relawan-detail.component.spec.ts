import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelawanDetailComponent } from './relawan-detail.component';

describe('RelawanDetailComponent', () => {
  let component: RelawanDetailComponent;
  let fixture: ComponentFixture<RelawanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelawanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelawanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
