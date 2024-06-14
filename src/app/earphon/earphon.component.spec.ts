import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphonComponent } from './earphon.component';

describe('EarphonComponent', () => {
  let component: EarphonComponent;
  let fixture: ComponentFixture<EarphonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarphonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarphonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
