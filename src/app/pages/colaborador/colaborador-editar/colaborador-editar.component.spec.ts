import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorEditarComponent } from './colaborador-editar.component';

describe('ColaboradorEditarComponent', () => {
  let component: ColaboradorEditarComponent;
  let fixture: ComponentFixture<ColaboradorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
