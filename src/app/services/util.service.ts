import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BoxObject} from "../domain/box-object";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }
  public  isValid(grid:BoxObject[][], rowIndex: number, colIndex: number, num: number|undefined): boolean {
      for (let i = 0; i < 9; i++) {
        if ((grid[i][colIndex].value === num && i!==rowIndex) || (grid[rowIndex][i].value=== num&& i !==colIndex)) {
          console.table(grid.map(arr=>arr.map(ob=>ob.value)))
          if(grid[i][colIndex].value === num && i!==rowIndex){
            console.log(i,colIndex, grid[i][colIndex].value, num, grid[i][colIndex].value === num)
          }
          if(grid[rowIndex][i].value=== num&& i !==colIndex){
            console.log(rowIndex, i, grid[rowIndex][i].value)
          }
          return false;
        }

      }
        let rowOffset = Math.floor(rowIndex/3)*3;
        let colOffset = Math.floor(colIndex/3)*3;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (grid[i + rowOffset][j + colOffset].value == num  && rowOffset+i!==rowIndex&& colOffset+j!=colIndex) {
              return false;
            }

          }
        }
      return true;
  }

//   public boolean isFinished(int rowIndex, int colIndex) {
//   if (rowIndex==mazeSize-1&& colIndex==mazeSize-1) {
//   return true;
// }
// return false;
// }
}
