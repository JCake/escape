import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


const focus = 'focus';
const closed = 'closed';

@Component({
  selector: 'app-padlock',
  templateUrl: './padlock.component.html',
  animations: [
    trigger('focusClose', [
      state('closed', style({
        height: '60px',
        width: '60px',
        'font-size': 'x-small'
      })),
      state('focus', style({
        height: '120px',
        width: '120px',
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
  styleUrls: ['./padlock.component.scss']
})
export class PadlockComponent implements OnInit {

  state = closed;

  topIndex = 0;
  styles = [{top: 0, left: '47%'}, {top: '47%', left: 'calc(100% - 1.2em)'},
        {top: 'calc(100% - 1.2em)', left: '47%'},{top: '47%', left: '0%'}];

  @Input()
  solution;
  entries = [];

  @Output()
  solved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.state = focus;
  }

  close() {
    this.state = closed;
  }

  up() {
    if(this.topIndex === 0){
      this.topIndex = 3;
    } else {
      this.topIndex--;
    }
    this.entries.push('up');
    this.checkEntries();
  }

  down(){
    if(this.topIndex === 3){
      this.topIndex = 0;
    } else {
      this.topIndex++;
    }
    this.entries.push('down');
    this.checkEntries();
  }

  match(arr1, arr2){
    if(arr1.length === arr2.length){
      let same = true;
      for(let i = 0; i < arr1.length; i++){
        same = (same && arr1[i] === arr2[i]);
      }
      return same;
    } else {
      return false;
    }
  }

  checkEntries(){
    console.log('checking');
    console.log(this.entries);
    console.log(this.solution);
    if(this.match(this.entries,this.solution)){
      this.solved.emit();
      console.log('solved!');
      this.entries = [];
    }
    if(this.entries.length > 6 && this.topIndex === 0){
      this.entries = [];
    }
  }

}
