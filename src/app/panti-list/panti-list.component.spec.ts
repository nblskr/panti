import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantiListComponent } from './panti-list.component';

describe('PantiListComponent', () => {
  let component: PantiListComponent;
  let fixture: ComponentFixture<PantiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
