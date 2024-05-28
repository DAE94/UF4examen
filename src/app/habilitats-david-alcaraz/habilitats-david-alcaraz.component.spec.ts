import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsDavidAlcarazComponent } from './habilitats-david-alcaraz.component';

describe('HabilitatsDavidAlcarazComponent', () => {
  let component: HabilitatsDavidAlcarazComponent;
  let fixture: ComponentFixture<HabilitatsDavidAlcarazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitatsDavidAlcarazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilitatsDavidAlcarazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
