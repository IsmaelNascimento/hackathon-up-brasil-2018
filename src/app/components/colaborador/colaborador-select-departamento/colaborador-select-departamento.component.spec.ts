import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorSelectDepartamentoComponent } from './colaborador-select-departamento.component';

describe('ColaboradorSelectDepartamentoComponent', () => {
  let component: ColaboradorSelectDepartamentoComponent;
  let fixture: ComponentFixture<ColaboradorSelectDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorSelectDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorSelectDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
