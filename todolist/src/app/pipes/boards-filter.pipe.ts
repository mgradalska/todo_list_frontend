import {Pipe, PipeTransform} from '@angular/core';
import {Board} from "../interfaces/board";

@Pipe({
  name: 'boardsFilter'
})
export class BoardsFilterPipe implements PipeTransform {

  transform(boards: Board[], searchString: string): Board[] {
    return searchString && boards
      ? boards.filter(board => board.name.includes(searchString))
      : boards;
  }

}
