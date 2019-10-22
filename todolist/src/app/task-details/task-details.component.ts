import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Task} from "../interfaces/task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  @Input() task: Task;
  @Input() editMode: boolean;
  @Output() editedTask = new EventEmitter<Task>();
  @Output() addedTask = new EventEmitter<Task>();

  saveTask() {
    this.editMode ? this.editedTask.emit(this.task) : this.addedTask.emit(this.task);
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
