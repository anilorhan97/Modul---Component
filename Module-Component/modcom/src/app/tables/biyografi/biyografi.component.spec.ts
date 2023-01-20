import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiyografiComponent } from './biyografi.component';

describe('BiyografiComponent', () => {
  let component: BiyografiComponent;
  let fixture: ComponentFixture<BiyografiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiyografiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiyografiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
