import { Component } from 'angular2/core';
import { TodoItem } from './todo_item';
import { TodoService, Todo } from '../services/todo_service';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="todo-list">
      <todo-item *ngFor="#todo of todos" [todo]="todo"></todo-item>
    <ul>
  `,
  directives: [TodoItem]
})
export class TodoList {
  public todos: Array<Todo>;

  constructor(private _todoService: TodoService) {
    this.todos = this._todoService.list();
  }
}
