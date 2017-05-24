import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonasiListComponent } from './donasi-list.component';

describe('DonasiListComponent', () => {
  let component: DonasiListComponent;
  let fixture: ComponentFixture<DonasiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonasiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
