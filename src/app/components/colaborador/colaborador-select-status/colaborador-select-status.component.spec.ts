import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorSelectStatusComponent } from './colaborador-select-status.component';

describe('ColaboradorSelectStatusComponent', () => {
  let component: ColaboradorSelectStatusComponent;
  let fixture: ComponentFixture<ColaboradorSelectStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorSelectStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorSelectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
