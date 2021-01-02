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
  lightsOn = [false, true, false, true, false];
  lightsOff = this.lightsOn.map((val) => !val);
  lights = this.lightsOn.slice();
  lightStatus = 'lights-on';
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
        top: (Math.floor(Math.random() * 55) + 220 + 60 * i) + 'px', 
        left: (Math.floor(Math.random() * 65) + 70 * i) + 'px' })
    }

  }

  toggle(i){
    this.lights[i] = !this.lights[i];
    if(this.lights.every((value, index) => value === this.lightsOn[index])){
      this.lightStatus = 'lights-on';
    } else if(this.lights.every((value, index) => value === this.lightsOff[index])){
      this.lightStatus = 'lights-off';
    } else {
      this.lightStatus = 'lights-dim';
    }
  }
}
