import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProductsItemComponent } from './favorite-products-item.component';

describe('FaviriteProductsItemComponent', () => {
  let component: FavoriteProductsItemComponent;
  let fixture: ComponentFixture<FavoriteProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteProductsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
