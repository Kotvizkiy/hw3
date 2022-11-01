import { Component, OnInit } from '@angular/core';

interface RadioElement {
  color: string;
  description: string;
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {

  radioElements: Array<RadioElement> = [
    { color:'blue', description: 'синий'},
    { color:'red', description: 'красный'},
    { color:'green', description: 'зеленый'},
    { color:'yellow', description: 'золотой'}
  ]

  currentBackground:string = this.radioElements[0].color

  constructor() { }

  setBackground(e:any) {
    this.currentBackground = e.target.value
  }

  ngOnInit(): void {
  }

}
