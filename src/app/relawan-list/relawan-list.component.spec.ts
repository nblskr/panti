import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelawanListComponent } from './relawan-list.component';

describe('RelawanListComponent', () => {
  let component: RelawanListComponent;
  let fixture: ComponentFixture<RelawanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelawanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelawanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
