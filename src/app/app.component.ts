import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'escape';
  numbers = [];
  positions = [];

  ngOnInit(){
    for(let i = 0; i < 3; i++){
      this.numbers.push(Math.floor(Math.random() * 10));
      this.positions.push({
        top: (Math.floor(Math.random() * 50) + 200 + 50 * i) + 'px', 
        left: (Math.floor(Math.random() * 60) + 60 * i) + 'px' })
    }

  }
}
