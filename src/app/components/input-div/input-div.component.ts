import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-div',
  templateUrl: './input-div.component.html',
  styleUrls: ['./input-div.component.css']
})
export class InputDivComponent implements OnInit {

  val: number | undefined ;
  @Input() set value(v: number){
    this.val=v;
  };

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setValu(event: KeyboardEvent) {
    if(event.altKey||event.ctrlKey||event.shiftKey||event.metaKey){
    }
    if(event.code==="Backspace") {
      this.val = undefined;
      this.valueChange.emit(this.val);
    } else if((!event.code.startsWith("Digit")) ) {
    } else if(event.code==="Digit0") {
    }  else{
      this.val = Number.parseInt(event.key);
      this.valueChange.emit(this.val);
    }
    event.preventDefault()
  }
}
