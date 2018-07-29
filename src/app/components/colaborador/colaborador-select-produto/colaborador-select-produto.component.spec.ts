import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorSelectProdutoComponent } from './colaborador-select-produto.component';

describe('ColaboradorSelectProdutoComponent', () => {
  let component: ColaboradorSelectProdutoComponent;
  let fixture: ComponentFixture<ColaboradorSelectProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorSelectProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorSelectProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
