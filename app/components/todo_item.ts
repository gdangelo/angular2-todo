import { Component, Input } from 'angular2/core';
import { TodoService, Todo } from '../services/todo_service';

@Component({
  selector: 'todo-item',
  template: `
    <li [class.completed]="todo.completed">
      <div class="view">
        <input class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed" />
        <label>{{todo.text}}</label>
        <button class="delete" (click)="remove()"></button>
      </div>
    </li>
  `
})
export class TodoItem {

  @Input() todo: Todo;

  constructor(private _todoService: TodoService) {}

  toggleCompletion() {
    this._todoService.toggleCompletion(this.todo);
  }

  remove() {
    this._todoService.remove(this.todo);
  }
}
