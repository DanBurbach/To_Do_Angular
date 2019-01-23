import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-selector',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class Task implements OnInit {
  public done: boolean = false;
  public dateMessage: string;

  constructor(public description: string) {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000)
   }

   ngOnInit() {

   }
}
