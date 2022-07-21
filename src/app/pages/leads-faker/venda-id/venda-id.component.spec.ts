import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaIdComponent } from './venda-id.component';

describe('VendaIdComponent', () => {
  let component: VendaIdComponent;
  let fixture: ComponentFixture<VendaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
