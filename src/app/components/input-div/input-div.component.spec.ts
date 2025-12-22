import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDivComponent } from './input-div.component';
import {BoxObject} from "../../domain/box-object";

describe('InputDivComponent', () => {
  let component: InputDivComponent;
  let fixture: ComponentFixture<InputDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDivComponent);
    component = fixture.componentInstance;
    // component.val =
    component.value = new BoxObject(0, true);
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should setValue 2 by keyboard', () => {
    component.val = new BoxObject(0, true);
    const keyboardEvent = new KeyboardEvent("keydown", {code: "Digit2", key: "2"});
    component.setValue(keyboardEvent);
    expect(component.val.value).toEqual(2);
    expect(component.val.isEditable).toBeTruthy();
  });
  it('should click backspace', () => {
    component.val = new BoxObject(5, true);
    const keyboardEvent = new KeyboardEvent("keydown", {code: "Backspace"});
    component.setValue(keyboardEvent);
    expect(component.val.value).toBeUndefined();
    expect(component.val.isEditable).toBeTruthy();
  });
});
