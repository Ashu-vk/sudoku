import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';
  obj={
    value: 0,
    isEditable: true
  }

  sudoku = [[this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj],
            [this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj,this.obj]]

  solve() {
    console.log(this.sudoku)
  }
}
