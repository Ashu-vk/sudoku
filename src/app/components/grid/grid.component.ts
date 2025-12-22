import {Component, Input, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private utilService: UtilService) { }
  @Input() grid: any[][] | undefined
  @Input() gridIndex: number[] | undefined

  ngOnInit(): void {
  }


  validate(rowIndex: number, colIndex: number, num: number): boolean {
    if(this.grid) {
      return this.utilService.isValid(this.grid,rowIndex, colIndex, num);
    } else {
      return false;
    }
  }

}
