import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'escape';
  startUp;
  lastNumTimes;
  lockPattern = [];
  lockOpen = false;
  numbers = [];
  positions = [];
  escaped = false;


  ngOnInit(){
    if(Math.random() * 2 > 1){
      this.startUp = true;
    }
    this.lastNumTimes = Math.floor(Math.random() * 3 + 1);

    if(this.startUp){
      this.lockPattern = ['up','down'];
      for(let i = 0; i < this.lastNumTimes; i++){
        this.lockPattern.push('up');
      }
    } else {
       this.lockPattern = ['down','up'];
      for(let i = 0; i < this.lastNumTimes; i++){
        this.lockPattern.push('down');
      }
    }

    for(let i = 0; i < 3; i++){
      this.numbers.push(Math.floor(Math.random() * 10));
      this.positions.push({
        top: (Math.floor(Math.random() * 60) + 200 + 60 * i) + 'px', 
        left: (Math.floor(Math.random() * 70) + 70 * i) + 'px' })
    }

  }
}
