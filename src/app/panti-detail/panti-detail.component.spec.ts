import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantiDetailComponent } from './panti-detail.component';

describe('PantiDetailComponent', () => {
  let component: PantiDetailComponent;
  let fixture: ComponentFixture<PantiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
