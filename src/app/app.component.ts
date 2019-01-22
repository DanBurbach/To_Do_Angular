import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'geronimo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your app!';
  currentFocus: string = 'Angular Homework!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Finish coding homework'),
    new Task('Count hours left in day'),
    new Task('No hours left. Sleep and repeat')
  ];
}
