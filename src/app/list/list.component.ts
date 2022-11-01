import { Component, OnInit } from '@angular/core';

interface Framework  {
  name: string;
  description: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {

  frameworkList : Array<Framework> = [
    { name: 'React JS', description: 'React is the most popular web framework in 2022, with over 40% of professional developers saying they use it extensively. It is an open-source JavaScript library developed by Facebook and used to build highly responsive user interfaces. It is declarative and component-based, meaning you can reuse components to create complex UIs in a short time'},
    { name: 'jQuery', description: 'jQuery is the second most popular web framework. It is an open-source JavaScript library that you can use to simplify interaction with the DOM (Document Object Model). It helps you navigate the DOM tree easily.'},
    { name: 'Express', description: 'Express (also Express.js) is the third most popular JavaScript framework after jQuery. It is a minimal and fast JavaScript framework for backend development. You can use it with Node.js, a JavaScript runtime, to create efficient web applications.'},
    { name: 'Angular', description: 'Angular is the fourth most popular JavaScript framework. It is an open-source framework launched by Google in 2016. You can use it on the frontend or backend to create dynamic Single Page Apps (SPAs) and Progressive Web Apps (PWAs) with faster page loads.'}
  ]

  selectIndex!: number;
  description!: string; 

  
  constructor() { 
    this.showDescr(0);
  }

  showDescr(index :number){
    this.selectIndex = index;
    this.description = this.frameworkList[this.selectIndex].description 
  }

  ngOnInit(): void {
  }

}
