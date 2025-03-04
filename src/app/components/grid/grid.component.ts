import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input() grid: any[][] | undefined
  @Input() gridIndex: number[] | undefined

  ngOnInit(): void {
  }


  validate(rowIndex: number, colIndex: number, num: number) {
    console.log(this.grid)
    console.log( this.isValid(rowIndex, colIndex, num))
  }
  public  isValid( rowIndex: number, colIndex: number, num: number): boolean {
    if(this.grid) {
      for (let i = 0; i < 9; i++) {
        if (this.grid[i][colIndex] === num && i!==rowIndex) {
          return false;
        }

      }
      for (let i = 0; i < 9; i++) {
        if (this.grid[rowIndex][i] == num && i!==colIndex) {
          return false;
        }

      }
      let rowOffset = rowIndex / 3 * environment.boxSize;
      let colOffset = colIndex / 3 * environment.boxSize;
      for (let i = 0; i < environment.boxSize; i++) {
        for (let j = 0; j < environment.boxSize; j++) {
          if (this.grid[i + rowOffset][j + colOffset] == num && (i + rowOffset !== rowIndex) &&  (j + colOffset!== colIndex)) {
            return false;
          }

        }
      }
      return true;
    }
    return false;
}
}
