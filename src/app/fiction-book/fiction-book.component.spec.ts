import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionBookComponent } from './fiction-book.component';

describe('FictionBookComponent', () => {
  let component: FictionBookComponent;
  let fixture: ComponentFixture<FictionBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FictionBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FictionBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
