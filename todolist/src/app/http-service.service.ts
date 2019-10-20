import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:8000/api/';

  private boardsUrl = `${this.apiUrl}boards/`;
  private tasksUrl = `${this.apiUrl}tasks/`;

  getBoards(): Observable<any> {
    return this.http.get(this.boardsUrl)
  }

  updateTask(task): Observable<any> {
    return this.http.patch(`${this.tasksUrl}${task.id}/`, task)
  }

  deleteTask(task): Observable<any> {
    return this.http.delete(`${this.tasksUrl}${task.id}/`)
  }

  addTask(taskData): Observable<any> {
    return this.http.post(this.tasksUrl, taskData)
  }
}
