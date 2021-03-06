import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http-service.service";
import {Board} from "./interfaces/board";
import {Task} from "./interfaces/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {
  };

  boards: Board[];
  searchBoardString: string;

  onTaskDelete(board: Board, taskToDelete: Task) {
    this.httpService
      .deleteTask(taskToDelete)
      .subscribe({
        next: () => board.tasks.splice(board.tasks.indexOf(taskToDelete), 1)
      })
  }

  onTaskUpdate(updatedTask: Task) {
    this.httpService
      .updateTask(updatedTask)
      .subscribe({
        next: response => updatedTask = response
      })
  }

  onTaskAdd(board: Board, taskToAdd: Task) {
    this.httpService
      .addTask(taskToAdd)
      .subscribe({
        next: addedTask => board.tasks.push(addedTask)
      })
  }

  updateSearchString(searchString: string) {
    this.searchBoardString = searchString;
  }

  ngOnInit() {
    this.httpService
      .getBoards()
      .subscribe({
        next: response => this.boards = response.results
      });
  }
}
