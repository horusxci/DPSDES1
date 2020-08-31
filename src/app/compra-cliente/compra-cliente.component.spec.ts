import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraClienteComponent } from './compra-cliente.component';

describe('CompraClienteComponent', () => {
  let component: CompraClienteComponent;
  let fixture: ComponentFixture<CompraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
