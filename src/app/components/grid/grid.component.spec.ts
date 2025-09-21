import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import {BoxObject} from "../../domain/box-object";

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate wrong solution', () => {
    component.grid=undefined;
    expect(component.validate(0,0,5)).toBeFalse();
  });

  it('should validate correct solution', () => {
    component.grid= [
      [new BoxObject(5, true), new BoxObject(3, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true)],
      [new BoxObject(6, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(1, true), new BoxObject(9, true), new BoxObject(5, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true)],
      [new BoxObject(0, true), new BoxObject(9, true), new BoxObject(8, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(6, true), new BoxObject(0, true)],
      [new BoxObject(8, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(3, true)],
      [new BoxObject(4, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(8, true), new BoxObject(0, true), new BoxObject(3, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(1, true)],
      [new BoxObject(7, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(2, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(6, true)],
      [new BoxObject(0, true), new BoxObject(6, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(2, true), new BoxObject(8, true), new BoxObject(0, true)],
      [new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(4, true), new BoxObject(1, true), new BoxObject(9, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(5, true)],
      [new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(8, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, true), new BoxObject(9, true)]
    ];
    expect(component.validate(0,2,1)).toBeTruthy();
  });

});
