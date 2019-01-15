import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-input-output',
  templateUrl: './test-input-output.component.html',
  styleUrls: ['./test-input-output.component.css']
})
export class TestInputOutputComponent implements OnInit {

  private _model: any = {};
  @Input() enabled:boolean = true;
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  private onSubmit(firstName:string, lastName:string, email : string): void {
    this._model.firstName = firstName;
    this._model.lastName = lastName;
    this._model.email = email;
    if (typeof (this._model) === "undefined") {
        alert("Form not Filled Up Properly");
    }
    else {
        alert("Data Is Correct");
        this.onFormSubmit.emit(this._model);
    }
}
private onClear(): void {
    this._model = {};
}

}
