import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonasiDetailComponent } from './donasi-detail.component';

describe('DonasiDetailComponent', () => {
  let component: DonasiDetailComponent;
  let fixture: ComponentFixture<DonasiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonasiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonasiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
