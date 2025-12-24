import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoxObject} from "../../domain/box-object";

@Component({
  selector: 'app-input-div',
  templateUrl: './input-div.component.html',
  styleUrls: ['./input-div.component.css']
})
export class InputDivComponent implements OnInit {

  val!: BoxObject;

  @Input() set value(v: BoxObject) {
    if (v) {
      this.val = v;
    }
  };

  @Output() valueChange: EventEmitter<BoxObject> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  setValue(event: Event) {
    event.preventDefault()
    if (event instanceof InputEvent) {
      if (event.inputType === "deleteContentBackward") {
        this.val.value = undefined
        this.valueChange.emit(this.val);
      } else if (event.inputType === "insertText" && event.data) {
        const a = Number(event.data)
        if(!isNaN(a)) {
          this.val.value = a;
          this.valueChange.emit(this.val);
        }
      }
    }
  }
}
