import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosPickerComponent } from './ios-picker.component';

describe('IosPickerComponent', () => {
  let component: IosPickerComponent;
  let fixture: ComponentFixture<IosPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
