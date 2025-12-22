import {Component} from '@angular/core';
import {BoxObject} from './domain/box-object';
import {environment} from "../environments/environment";
import {UtilService} from "./services/util.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';

  constructor(private utilService: UtilService) {
  }


  // sudoku = [[new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)],
  //           [new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true),new BoxObject(0, true)]]

  sudoku = [
    [new BoxObject(5, false), new BoxObject(3, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true)],
    [new BoxObject(6, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(1, false), new BoxObject(9, false), new BoxObject(5, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true)],
    [new BoxObject(0, true), new BoxObject(9, false), new BoxObject(8, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(6, false), new BoxObject(0, true)],
    [new BoxObject(8, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(3, false)],
    [new BoxObject(4, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(8, false), new BoxObject(0, true), new BoxObject(3, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(1, false)],
    [new BoxObject(7, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(2, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(6, false)],
    [new BoxObject(0, true), new BoxObject(6, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(2, false), new BoxObject(8, false), new BoxObject(0, true)],
    [new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(4, false), new BoxObject(1, false), new BoxObject(9, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(5, false)],
    [new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(8, false), new BoxObject(0, true), new BoxObject(0, true), new BoxObject(7, false), new BoxObject(9, false)]
  ];


  solve() {
    return this.solveProblem(0, 0).then(a => a);
  }

  createProblem() {
    this.sudoku.map(i => i.map(j => {
      if (j.value) {
        j.isEditable = false;
      }
    }));
  }
  reset() {
    // Create distinct BoxObject instances for every cell so they are not shared
    // (previous implementation used Array.fill which reused the same instance
    // across multiple cells/rows and caused updates to propagate everywhere)
    for (let r = 0; r < environment.gridSize; r++) {
      if (!this.sudoku[r]) {
        this.sudoku[r] = [];
      }
      for (let c = 0; c < environment.gridSize; c++) {
        this.sudoku[r][c] = new BoxObject(0, true);
      }
    }
  }

  public async solveProblem(rowIndex: number, colIndex: number): Promise<boolean> {
    if (colIndex == environment.gridSize) {
      rowIndex++;
      if (rowIndex == environment.gridSize) {
        return true;
      }
      colIndex = 0;
    } else {
    }
   if(this.sudoku) {
     if (this.sudoku[rowIndex][colIndex]?.value !== 0) {
       return this.solveProblem(rowIndex, colIndex + 1);
     }
   }
    for (let num = 1; num <= environment.gridSize; num++) {
      if (this.utilService.isValid(this.sudoku, rowIndex, colIndex, num)) {
        this.sudoku[rowIndex][colIndex] = new BoxObject(num, true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (await this.solveProblem(rowIndex, colIndex + 1)) {
          return true;
        }
        this.sudoku[rowIndex][colIndex] = new BoxObject(0, true);
      }
    }
    return false;
  }


}
