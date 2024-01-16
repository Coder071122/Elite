import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurchefComponent } from './ourchef.component';

describe('OurchefComponent', () => {
  let component: OurchefComponent;
  let fixture: ComponentFixture<OurchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurchefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
