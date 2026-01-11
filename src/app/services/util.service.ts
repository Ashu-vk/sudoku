import { Injectable } from '@angular/core';
import {BoxObject} from "../domain/box-object";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }
  public isValid(grid:BoxObject[][], rowIndex: number, colIndex: number, num: number|undefined): boolean {
      for (let i = 0; i < environment.gridSize; i++) {
        if ((grid[i][colIndex].value === num && i!==rowIndex) || (grid[rowIndex][i].value=== num&& i !==colIndex)) {
          return false;
        }
      }
        let rowOffset = Math.floor(rowIndex/environment.boxSize)*environment.boxSize;
        let colOffset = Math.floor(colIndex/environment.boxSize)*environment.boxSize;
        for (let i = 0; i < environment.boxSize; i++) {
          for (let j = 0; j < environment.boxSize; j++) {
            if (grid[i + rowOffset][j + colOffset].value == num  && rowOffset+i!==rowIndex&& colOffset+j!=colIndex) {
              return false;
            }
          }
        }
      return true;
  }

  public isFinished(grid: BoxObject[][]): boolean {
    return grid.some(arr => arr.some(ob => !ob.value));
  }
}
