import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegispantiComponent } from './regispanti.component';

describe('RegispantiComponent', () => {
  let component: RegispantiComponent;
  let fixture: ComponentFixture<RegispantiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegispantiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegispantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
