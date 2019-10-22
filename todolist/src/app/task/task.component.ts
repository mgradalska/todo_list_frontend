import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../interfaces/task";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TaskDetailsComponent} from "../task-details/task-details.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private modalService: NgbModal) {
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

  showDetails() {
    const detailsComponent = this.modalService.open(TaskDetailsComponent);
    detailsComponent.componentInstance.task = this.task;
    detailsComponent.componentInstance.editMode = true;
    detailsComponent.componentInstance
      .editedTask
      .subscribe(editedTask => this.updateTask.emit(editedTask))
  }

  ngOnInit() {
  }
}
