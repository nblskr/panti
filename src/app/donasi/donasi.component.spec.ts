import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonasiComponent } from './donasi.component';

describe('DonasiComponent', () => {
  let component: DonasiComponent;
  let fixture: ComponentFixture<DonasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
