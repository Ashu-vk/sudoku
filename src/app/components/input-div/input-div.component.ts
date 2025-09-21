import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoxObject} from "../../domain/box-object";

@Component({
  selector: 'app-input-div',
  templateUrl: './input-div.component.html',
  styleUrls: ['./input-div.component.css']
})
export class InputDivComponent implements OnInit {

  val!:  BoxObject ;
  @Input() set value(v: BoxObject){
    if (v) {
      this.val = v;
    }
  };

  @Output() valueChange: EventEmitter<BoxObject> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setValu(event: KeyboardEvent) {
   if(this.val && this.val.isEditable) {
     if(event.altKey||event.ctrlKey||event.shiftKey||event.metaKey){
     }
     if(event.code==="Backspace") {
       this.val.value = undefined
       this.valueChange.emit(this.val);
     } else if((!event.code.startsWith("Digit")) ) {
     } else if(event.code==="Digit0") {
     }  else{
       this.val.value = Number.parseInt(event.key);
       this.valueChange.emit(this.val);
     }
     event.preventDefault();
   }
  }
  // setValu($event: any) {
  //   console.log($event)
  //
  // }
}
