import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDavidAclarazComponent } from './item-david-aclaraz.component';

describe('ItemDavidAclarazComponent', () => {
  let component: ItemDavidAclarazComponent;
  let fixture: ComponentFixture<ItemDavidAclarazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDavidAclarazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDavidAclarazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
