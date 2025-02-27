import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input() grid: number[][] | undefined
  @Input() gridIndex: number[] | undefined

  ngOnInit(): void {
  }


  validate() {
    console.log(this.grid)
  }
}
