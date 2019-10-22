import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../interfaces/task";
import {Board} from "../interfaces/board";
import {TaskDetailsComponent} from "../task-details/task-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  };

  @Input() board: Board;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() addTask = new EventEmitter<Task>();

  newTaskTemplate: Task;

  onTaskDelete(taskToDelete: Task) {
    this.deleteTask.emit(taskToDelete);
  }

  onTaskUpdate(updatedTask: Task) {
    this.updateTask.emit(updatedTask);
  }

  initNewTaskTemplate() {
    this.newTaskTemplate = new class implements Task {
      board: number;
      description: string;
      id: number;
      status: string;
      title: string;
    };
    this.newTaskTemplate.board = this.board.id;
  }

  addNewTask() {
    const detailsComponent = this.modalService.open(TaskDetailsComponent);
    detailsComponent.componentInstance.task = this.newTaskTemplate;
    detailsComponent.componentInstance.editMode = false;
    detailsComponent.componentInstance
      .addedTask
      .subscribe(taskToAdd => {
        this.addTask.emit(taskToAdd);
        this.initNewTaskTemplate();
      })
  }

  ngOnInit() {
    this.initNewTaskTemplate();
  }


}
