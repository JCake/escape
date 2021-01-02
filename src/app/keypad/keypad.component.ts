import { trigger, state, style, transition, animate } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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
  state = closed;
  clickableButtons = false;

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.state = focus;
  }

  close() {
    this.state = closed;
    this.clickableButtons = false;
  }

  activateButtons() {
    if(this.state === focus){
      this.clickableButtons = true;
    }
    
  }

}