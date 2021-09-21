import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewprodComponent } from './vewprod.component';

describe('VewprodComponent', () => {
  let component: VewprodComponent;
  let fixture: ComponentFixture<VewprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VewprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VewprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
