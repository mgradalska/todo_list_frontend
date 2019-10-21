import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../interfaces/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() {
  }

  @Input() task: Task;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  changeStatus(): void {
    this.task.status = this.task.status === 'TODO' ? 'DONE' : 'TODO';
    this.updateTask.emit(this.task);
  }

  delete() {
    this.deleteTask.emit(this.task);
  }

  ngOnInit() {
  }
}
