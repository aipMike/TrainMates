import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciTempoComponent } from './inserisci-tempo.component';

describe('InserisciTempoComponent', () => {
  let component: InserisciTempoComponent;
  let fixture: ComponentFixture<InserisciTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciTempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
