import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../http-service.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  @Input() task;
  @Output() deleted = new EventEmitter<boolean>();

  changeStatus() {
    this.task.status = this.task.status === 'TODO' ? 'DONE' : 'TODO';
    this.httpService.updateTask(this.task);
  }

  delete() {
    this.httpService.deleteTask(this.task).subscribe({
      next: response => this.deleted.emit(this.task)
    })
  }

  ngOnInit() {
  }

}
