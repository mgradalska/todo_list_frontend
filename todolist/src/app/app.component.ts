import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist';

  constructor(private httpService: HttpService) {
  };

  boards = [];

  ngOnInit() {
    this.httpService
      .getBoards()
      .subscribe({
        next: response => this.boards = response.results
      });
  }
}
