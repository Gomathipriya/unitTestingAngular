import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputOutputComponent } from './test-input-output.component';

import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('TestInputOutputComponent', () => {
  let component: TestInputOutputComponent;
  let fixture: ComponentFixture<TestInputOutputComponent>;

  let submitEl: DebugElement;
  let firstNameEl: DebugElement;
  let lastNameEl: DebugElement;
  let emailEl : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('input[id=btnSubmit]'));
    firstNameEl = fixture.debugElement.query(By.css('input[id=txtFName]'));
    lastNameEl = fixture.debugElement.query(By.css('input[id=txtLName]'));
    emailEl = fixture.debugElement.query(By.css('input[type=email]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting value to input properties on form load', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });
  it('Setting value to input properties on button click', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });
  it('Entering value in input controls and emit output events', () => {
    let user: any;
    firstNameEl.nativeElement.value = "Debasis";
    lastNameEl.nativeElement.value = "Saha";
    emailEl.nativeElement.value = "debasis@yahoo.com";
    // Subscribe to the Observable and store the user in a local variable.
    component.onFormSubmit.subscribe((value) => user = value);
    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);
    // Now we can check to make sure the emitted value is correct
    expect(user.firstName).toBe("Debasis");
    expect(user.lastName).toBe("Saha");
    expect(user.email).toBe("debasis@yahoo.com");
  });
});
