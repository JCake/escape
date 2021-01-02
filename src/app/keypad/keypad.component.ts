import { trigger, state, style, transition, animate } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

const focus = 'focus';
const closed = 'closed';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  animations: [
    trigger('focusClose', [
      state('closed', style({
        height: '75px',
        width: '50px',
        'font-size': 'medium'
      })),
      state('focus', style({
        height: '210px',
        width: '145px',
        'font-size': 'large'
      })),
      transition(`${closed} => ${focus}`, [
        animate('0.2s')
      ]),
      transition(`${focus} => ${closed}`, [
        animate('0.2s')
      ]),
    ])
  ],
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Input()
  answer: number[];

  state = closed;
  clickableButtons = false;
  input = '';
  entryResult;

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.state = focus;
  }

  close() {
    this.state = closed;
    this.clickableButtons = false;
    this.input = '';
  }

  activateButtons() {
    if(this.state === focus){
      this.clickableButtons = true;
    }
    
  }

  press(num){
    this.entryResult = '';
    this.input += `${num}`;
    if(this.input.length === this.answer.length){
      console.log('checking ' + this.input);
      this.entryResult = (this.input === this.answer.join('')) ? 'correct' : 'incorrect';
      this.input = '';
    }
  }

}
