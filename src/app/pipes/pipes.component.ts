import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent implements OnInit {

  pipeString: string = 'Angular v14.2'
  percent: number = 0.14
  amount: number = 99.5

  framework = {
    name: 'Angular',
    version: 'v14.0'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
