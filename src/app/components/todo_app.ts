import { Component } from 'angular2/core';
import { TodoList } from './todo_list';
import { TodoService } from '../services/todo_service';

@Component({
  selector: 'todo-app',
  template: require('./todo_app.html'),
  directives: [TodoList],
})
export class TodoApp {
  newItem: String = '';

  constructor(private _todoService: TodoService) {}

  addTodoItem() {
    if (this.newItem.trim().length > 0){
      this._todoService.add(this.newItem);
      this.newItem = '';
    }
  }

  removeCompleted() {
    this._todoService.removeCompleted();
  }

  allCompleted() {
    this._todoService.allCompleted();
  }

  setAllTo(completed: Boolean) {
    this._todoService.setAllTo(completed);
  }

  get itemsCount() {
    return this._todoService.list().length;
  }

  get itemsRemaining() {
    return this._todoService.getRemaining().length;
  }

  get itemsCompleted() {
    return this._todoService.getCompleted().length;
  }
}
