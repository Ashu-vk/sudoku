import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BoxObject} from "./domain/box-object";
import {UtilService} from "./services/util.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UtilService
      ]
    }).compileComponents();
  });

  const sudoku = [
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


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sudoku'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sudoku');
  });

  it(`should click the solve the sudoku`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(UtilService);
    const app = fixture.componentInstance;
    app.sudoku = sudokuPuzzle;
   app.solve();
   app.sudoku.map((row, i)=> {
      row.map((col, j)=>{
         // expect(service.isValid(sudoku, i, j, sudoku[i][j].value)).toBeTruthy()
      })
   })
  });

  it("should create the sudoku problem", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.sudoku= sudokuPuzzle;
    app.createProblem();
    expect(app.sudoku).toEqual(sudoku);
  })

});
