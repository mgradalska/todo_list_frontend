import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {
  };

  @Input() board;

  onTaskDelete(deletedTask) {
    this.board.tasks.splice(this.board.tasks.indexOf(deletedTask), 1);
  }

  ngOnInit() {
  }

}
