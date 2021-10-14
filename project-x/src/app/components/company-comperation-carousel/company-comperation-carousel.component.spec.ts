import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComperationCarouselComponent } from './company-comperation-carousel.component';

describe('CompanyComperationCarouselComponent', () => {
  let component: CompanyComperationCarouselComponent;
  let fixture: ComponentFixture<CompanyComperationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyComperationCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyComperationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
