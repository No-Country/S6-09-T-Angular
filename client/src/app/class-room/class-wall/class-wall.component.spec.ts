import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWallComponent } from './class-wall.component';

describe('ClassWallComponent', () => {
  let component: ClassWallComponent;
  let fixture: ComponentFixture<ClassWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
