import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-board-search',
  templateUrl: './board-search.component.html'
})
export class BoardSearchComponent implements OnInit {

  searchString: string;

  @Output() searchStringChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

}
