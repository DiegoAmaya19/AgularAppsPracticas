import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluloMatriculaComponent } from './calulo-matricula.component';

describe('CaluloMatriculaComponent', () => {
  let component: CaluloMatriculaComponent;
  let fixture: ComponentFixture<CaluloMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaluloMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaluloMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
