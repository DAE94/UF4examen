import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDavidAlcarazComponent } from './home-david-alcaraz.component';

describe('HomeDavidAlcarazComponent', () => {
  let component: HomeDavidAlcarazComponent;
  let fixture: ComponentFixture<HomeDavidAlcarazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDavidAlcarazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDavidAlcarazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
