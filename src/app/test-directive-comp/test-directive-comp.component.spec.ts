import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectiveCompComponent } from './test-directive-comp.component';
import { TestDirectiveDirective } from '../test-directive.directive';
import {Component, DebugElement} from "@angular/core";
import { By } from "@angular/platform-browser";

describe('TestDirectiveCompComponent', () => {
  let component: TestDirectiveCompComponent;
  let fixture: ComponentFixture<TestDirectiveCompComponent>;
  let inputEl: DebugElement;

  //directive is also added in the declartion
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirectiveCompComponent, TestDirectiveDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectiveCompComponent);
    component = fixture.componentInstance;
    //get the dom input element
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
