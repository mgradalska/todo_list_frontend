import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../interfaces/task";
import {Board} from "../interfaces/board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {
  };

  @Input() board: Board;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  onTaskDelete(taskToDelete: Task) {
    this.deleteTask.emit(taskToDelete);
  }

  onTaskUpdate(updatedTask: Task){
    this.updateTask.emit(updatedTask);
  }

  ngOnInit() {
  }

}
