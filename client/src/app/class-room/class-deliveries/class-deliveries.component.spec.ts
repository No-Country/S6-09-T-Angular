import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDeliveriesComponent } from './class-deliveries.component';

describe('ClassDeliveriesComponent', () => {
  let component: ClassDeliveriesComponent;
  let fixture: ComponentFixture<ClassDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
