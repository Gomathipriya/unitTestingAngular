import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TestInputOutputComponent } from './test-input-output/test-input-output.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { TestDirectiveCompComponent } from './test-directive-comp/test-directive-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TestInputOutputComponent,
    TestDirectiveDirective,
    TestDirectiveCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
