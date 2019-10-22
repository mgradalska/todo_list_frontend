import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {TaskComponent} from './task/task.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { BoardsFilterPipe } from './pipes/boards-filter.pipe';
import { BoardSearchComponent } from './board-search/board-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TaskComponent,
    TaskDetailsComponent,
    BoardsFilterPipe,
    BoardSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    TaskDetailsComponent,
  ]
})
export class AppModule {
}
