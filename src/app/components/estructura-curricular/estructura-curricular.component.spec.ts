import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraCurricularComponent } from './estructura-curricular.component';

describe('EstructuraCurricularComponent', () => {
  let component: EstructuraCurricularComponent;
  let fixture: ComponentFixture<EstructuraCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraCurricularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuraCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
