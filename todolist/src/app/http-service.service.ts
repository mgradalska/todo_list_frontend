import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Board} from "./interfaces/board";
import {ApiResponse} from "./interfaces/api-response";
import {Task} from "./interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:8000/api/';

  private boardsUrl = `${this.apiUrl}boards/`;
  private tasksUrl = `${this.apiUrl}tasks/`;

  getBoards(): Observable<ApiResponse<Board>> {
    return this.http.get<ApiResponse<Board>>(this.boardsUrl)
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.tasksUrl}${task.id}/`, task)
  }

  deleteTask(task: Task): Observable<null> {
    return this.http.delete<null>(`${this.tasksUrl}${task.id}/`)
  }

  addTask(taskData): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, taskData)
  }
}
