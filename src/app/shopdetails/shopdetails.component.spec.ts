import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailsComponent } from './shopdetails.component';

describe('ShopdetailsComponent', () => {
  let component: ShopdetailsComponent;
  let fixture: ComponentFixture<ShopdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
