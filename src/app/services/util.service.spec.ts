import { BoxObject } from "../domain/box-object";
import {UtilService} from "./util.service";

describe('UtilService', () => {
  it('should create an instance', () => {
    const service = new UtilService();
    expect(service).toBeTruthy();
  });

  const sudokuPuzzle = [
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

  it('should valid num', () => {
    const service = new UtilService();
    const result = service.isValid(sudokuPuzzle,0,2,1)
    expect(result).toEqual(true);
  });

  it('should invalid row', () => {
    const service = new UtilService();
    const result = service.isValid(sudokuPuzzle,0,2,3)
    expect(result).toEqual(false);
  });

  it('should invalid column', () => {
    const service = new UtilService();
    const result = service.isValid(sudokuPuzzle,2,0,6)
    expect(result).toEqual(false);
  });

  it('should invalid box', () => {
    const service = new UtilService();
    const result = service.isValid(sudokuPuzzle,0,2,9)
    expect(result).toEqual(false);
  });

});
