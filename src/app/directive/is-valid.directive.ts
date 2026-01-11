import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {BoxObject} from "../domain/box-object";
import {environment} from "../../environments/environment";
import {UtilService} from "../services/util.service";

@Directive({
  selector: '[appIsValid]'
})
export class IsValidDirective{

  @Input() public grid!: any[][];
  @Input() public rowIndex!: any;
  @Input() public colIndex!: any;
  @Input() public value!: any;
  constructor(private el: ElementRef,
              private renderer:Renderer2,
              private utils: UtilService) {}

  @HostListener("beforeinput")
  public validate() {
    if (this.utils.isValid(this.grid, this.rowIndex, this.colIndex, this.value.value)) {
      this.renderer.setStyle(this.el.nativeElement, "border", "1px solid green")
    } else {
      this.renderer.setStyle(this.el.nativeElement, "border", "3px solid red")
    }
  }


}
