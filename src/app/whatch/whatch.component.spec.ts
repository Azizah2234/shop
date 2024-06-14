import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatchComponent } from './whatch.component';

describe('WhatchComponent', () => {
  let component: WhatchComponent;
  let fixture: ComponentFixture<WhatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
