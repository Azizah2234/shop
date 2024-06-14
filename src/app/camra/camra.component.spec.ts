import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamraComponent } from './camra.component';

describe('CamraComponent', () => {
  let component: CamraComponent;
  let fixture: ComponentFixture<CamraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
