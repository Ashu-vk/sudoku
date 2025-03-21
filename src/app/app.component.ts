import { Component } from '@angular/core';
import { BoxObject } from './domain/box-object';
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


  solve() {
    this.solveProblem(0, 0).then(a=>console.log(a))
  }

  createProblem() {
    this.sudoku.map(i=> i.map(j=> {
      if(j.value){
        j.isEditable=false;
      }
    }));
  }

  public async solveProblem(rowIndex: number, colIndex: number): Promise<boolean> {
    if (colIndex == 9) {
      rowIndex++;
      if (rowIndex == 9) {
        return true;
      }
      colIndex =0;
    } else {
    }

    if (this.sudoku[rowIndex][colIndex].value !== 0) {
      return this.solveProblem(rowIndex , colIndex+1);
    }

    for (let num = 1; num < 10; num++) {
      if (this.utilService.isValid(this.sudoku, rowIndex, colIndex, num)) {

        this.sudoku[rowIndex][colIndex] = new BoxObject(num, true);
        await new Promise(resolve => setTimeout(resolve, 100));

        if (await this.solveProblem(rowIndex, colIndex + 1)) {
          return true;
        }

        this.sudoku[rowIndex][colIndex] = new BoxObject(0, true);

      }
    }
    return false;
  }

  // private solveProblem(rowIndex: number, colIndex: number): boolean {
  //   if(rowIndex==environment.boxSize ) {
  //     colIndex++;
  //     if(colIndex==environment.boxSize) {
  //       return true;
  //     } else {
  //       rowIndex=0;
  //     }
  //   }
  //
  //   if(this.sudoku[rowIndex][colIndex].value!=0) {
  //     return this.solveProblem(rowIndex+1, colIndex);
  //   }
  //
  //   for (let num=1; num<10;num++) {
  //     if(this.utilService.isValid(this.sudoku, rowIndex, colIndex, num)) {
  //       this.sudoku[rowIndex][colIndex].value=num;
  //       if(this.solveProblem(rowIndex+1, colIndex)) {
  //         return true;
  //       }
  //       this.sudoku[rowIndex][colIndex].value =0;
  //     }
  //   }
  //   return false;
  // }
}
