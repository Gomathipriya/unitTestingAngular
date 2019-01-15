import { TestDirectiveDirective } from './test-directive.directive';

/*describe('TestDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new TestDirectiveDirective();
    expect(directive).toBeTruthy();
  });
}); */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  template: `<input type="text" appTestDirective>`
})
class TestHoverFocusComponent {
}

describe('Directive: appTestDirective', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [TestHoverFocusComponent, TestDirectiveDirective]
      });
      fixture = TestBed.createComponent(TestHoverFocusComponent);
      component = fixture.componentInstance;
      inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('hovering over input', () => {
    //trigger mouse over event
      inputEl.triggerEventHandler('mouseover', null);
      fixture.detectChanges();
      expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

      //trigger mouse out event
      inputEl.triggerEventHandler('mouseout', null);
      fixture.detectChanges();
      expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
